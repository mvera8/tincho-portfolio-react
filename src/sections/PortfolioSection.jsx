import { Button, Card, Grid, Image, Stack, Title } from '@mantine/core';
import { Each, MvSection, SectionTitle, TextDimmed } from '../components';
import { IconArrowUpRight } from '@tabler/icons-react';
import { useI18n } from '../i18n/useI18n.js';
import T from "../i18n/T.jsx";

export const PortfolioSection = () => {
  const { get } = useI18n();
  const worksRaw = get("portfolio.works");
  const works = Array.isArray(worksRaw) ? worksRaw : [];
  if (works.length === 0) return null;

  return (
    <MvSection>
			<SectionTitle
				title={<T k="portfolio.title" />}
				subtitle={<T k="portfolio.subtitle" />}
				centerText
			/>

			<Each
				of={works}
				render={({ id, title, text }, idx) => {
					const image = id + '.webp';

					if (!id) {
						return;
					}

					return (
						<Card key={id ?? idx} p={0} radius="md" mb="xl" withBorder style={{ height: '100%' }}>
							<Grid align="stretch">
								<Grid.Col span={{ base: 12, md: 12, lg: 4 }}>
									<Stack
											h={'100%'}
											align="stretch"
											justify="space-between"
											gap="md"
											p={{base: "lg", lg: "xl"}}
										>
											<div>
												<Title order={3} size="h2" c="gray" mb="md">{title}</Title>
												<TextDimmed text={text} />
											</div>
											<Button fullWidth size="md" rightSection={<IconArrowUpRight size={20} />}>
												View Project
											</Button>
										</Stack>
								</Grid.Col>
								<Grid.Col span={{ base: 12, md: 12, lg: 8 }}>
									<Image radius="md" src={image} alt="Cleanmax" />
								</Grid.Col>
							</Grid>
						</Card>
					);
				}}
			/>
		</MvSection>
  );
};
