import { Grid, Image, Stack, Title } from '@mantine/core';
import { CardLink, Each, MvButton, MvSection, SectionTitle, TextDimmed } from '../components';
import { useI18n } from '../i18n/useI18n.js';
import { IconArrowRight } from '@tabler/icons-react';
import { slugify } from '../helpers/slugify.js';
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
					const slug = slugify(id);
					const image = id + '.webp';

					if (!id) {
						return;
					}

					return (
						<CardLink key={idx} link={`/portfolio/${slug}`}>
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
											<MvButton
												text="View Project"
												Icon={IconArrowRight}
											/>
										</Stack>
								</Grid.Col>
								<Grid.Col span={{ base: 12, md: 12, lg: 8 }}>
									<Image radius="md" src={image} alt={title} />
								</Grid.Col>
							</Grid>
						</CardLink>
					);
				}}
			/>
		</MvSection>
  );
};
