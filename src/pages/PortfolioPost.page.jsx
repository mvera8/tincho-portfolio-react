import { useMemo } from 'react';
import { Card, Grid, Image, Stack, Title } from '@mantine/core';
import { CardIcon, Footer, MvHelmet, MvSection, Navbar, TextList } from '../components';
import { FaqsSection } from '../sections';
import { ReactCompareSlider } from 'react-compare-slider';
import { Navigate, useParams } from 'react-router-dom';
import { useI18n } from '../i18n/useI18n';

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

	return (
		<>
			<MvHelmet page={work.title} slug={slug} />
			<Navbar />
			<MvSection>
				<Grid align="center" pt="xl">
					<Grid.Col span={10}>
						<Title order={1} mb="xl">{work.title}</Title>

						{work.type}

						<ReactCompareSlider
							itemOne={<Image src="/martin_vera_bits.webp" alt="Image one" />}
							itemTwo={<Image src="/martin_vera_draw.webp" alt="Image two" />}
						/>

						<Image
							radius="md"
							mb="lg"
							src="/cleanmax.webp"
						/>
					</Grid.Col>
					<Grid.Col span={2}>
						<Card p="xl" radius="md">
							<Stack
								h={300}
								align="stretch"
								justify="center"
							>
								<TextList title="Year" text="2025" showDivider />
								<TextList title="Client" text="Cleanmax" showDivider />
								<TextList title="Type" text="Web Develop" />
							</Stack>
						</Card>
					</Grid.Col>
				</Grid>
				<Grid>
					<Grid.Col span={4}>
						<CardIcon />
					</Grid.Col>
					<Grid.Col span={4}>
						<CardIcon />
					</Grid.Col>
					<Grid.Col span={4}>
						<CardIcon />
					</Grid.Col>
				</Grid>
			</MvSection>
			<FaqsSection />
			<Footer />
		</>
	)
}
