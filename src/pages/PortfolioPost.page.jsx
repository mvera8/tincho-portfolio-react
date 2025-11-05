import { useMemo } from 'react';
import { Badge, Card, Grid, Image, Paper, Stack, Text, Title } from '@mantine/core';
import { Each, Footer, MvButton, MvHelmet, MvSection, Navbar, SectionTitle, TextList } from '../components';
import { ReactCompareSlider } from 'react-compare-slider';
import { Navigate, useParams } from 'react-router-dom';
import { useI18n } from '../i18n/useI18n';
import { PortfolioSection, StartSection } from '../sections';
import { IconArrowUpRight } from '@tabler/icons-react';
import T from '../i18n/T.jsx';

export const PortfolioPostPage = () => {
	const { slug } = useParams();
	const { get } = useI18n();

	const work = useMemo(() => {
		const list = Array.isArray(get('portfolio.works')) ? get('portfolio.works') : [];
		return list.find((p) => p.id === slug);
	}, [get, slug]);

	if (!work) {
		return <Navigate to="/portfolio" replace />;
	}

	const renderFeatured = () => {
		switch (work.featured?.type) {
		case 'slider':
			return (
				<Paper mb="lg">
					<ReactCompareSlider
						itemOne={<Image src={work.featured.image1} alt={work.featured.alt} />}
						itemTwo={<Image src={work.featured.image2} alt={work.featured.alt} />}
					/>
				</Paper>
			);
		case 'image':
			return (
				<Image
					radius="md"
					mb="lg"
					src={work.featured?.image}
					alt={work.featured?.alt}
				/>
			);
		}
	};

	return (
		<>
			<MvHelmet page={work.title} slug={slug} />
			<Navbar />
			<MvSection>
				<Grid align="center">
					<Grid.Col span={10}>
						<Title order={1} mb="xs">{work.title}</Title>
						{work?.goal && <Text mb="xl">{work?.goal}</Text>}
						{work?.featured?.type && renderFeatured()}

						<Each
							of={work?.tech}
							render={(item, idx) => (
								<Badge key={idx} variant="default" size="md" mr="xs">{item}</Badge>
							)}
						/>
					</Grid.Col>
					<Grid.Col span={2}>
						<Card p="xl" radius="md">
							<Stack h={300} align="stretch" justify="center">
								<TextList title="Year" text={work?.data?.year || '—'} showDivider />
								<TextList title="Client" text={work?.data?.client || '—'} showDivider />
								<TextList title="Type" text={work?.data?.type || '—'} />
							</Stack>
						</Card>
					</Grid.Col>
					<Grid.Col span={8}>
						<SectionTitle
							title={<T k="portfolio.work.title" />}
							text={work?.content}
						/>

						{work?.link &&
							<>
								<Title order={3} my="lg">
									<T k="portfolio.work.button" />
								</Title>
								<MvButton
									text={work.title}
									link={work?.link}
									variant="filled"
									Icon={IconArrowUpRight}
								/>
							</>
						}
					</Grid.Col>
				</Grid>
			</MvSection>
			<div
				style={{
					backgroundImage: 'radial-gradient(circle 400px at 0 100%, rgba(239,68,68,0.4), transparent)',
				}}
			>
				<PortfolioSection skip={slug} title="Other projects" />
				<StartSection />
			</div>
			<Footer />
		</>
	);
};
