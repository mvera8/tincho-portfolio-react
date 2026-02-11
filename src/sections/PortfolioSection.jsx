import { useEffect, useState } from 'react';
import { Grid, Image, Stack, Title } from '@mantine/core';
import { CardLink, Each, MvButton, MvSection, SectionTitle, TextDimmed } from '../components';
import { useI18n } from '../i18n/useI18n.js';
import { IconArrowRight } from '@tabler/icons-react';
import { slugify } from '../helpers/slugify.js';
import T from '../i18n/T.jsx';
import PropTypes from 'prop-types';

export const PortfolioSection = ({title, skip}) => {
	const { t } = useI18n();
	const [sectionTitle, setSectionTitle] = useState( t('portfolio.title') ) 
	const { get } = useI18n();
	const worksRaw = get('portfolio.works');
	const works = Array.isArray(worksRaw) ? worksRaw : [];

	useEffect(() => {
		if (title) {
			setSectionTitle(title);
		}
	}, [title]);
	
	if (works.length === 0) return null;

	return (
		<MvSection>
			<SectionTitle
				title={sectionTitle}
				subtitle={<T k="portfolio.subtitle" />}
				centerText
			/>

			<Each
				of={works}
				render={({ id, title, text }, idx) => {
					const slug = slugify(id);
					const image = '/' + id + '.webp';

					if (!id || skip === id) {
						return;
					}

					return (
						<CardLink key={idx} link={`/portfolio/${slug}`}>
							<Grid align="stretch">
								<Grid.Col span={{ base: 12, md: 12, lg: 4 }} order={{ base: 2, sm: 1 }}>
									<Stack
										h={'100%'}
										align="stretch"
										justify="space-between"
										gap="md"
										p={{base: 'lg', lg: 'xl'}}
									>
										<div>
											<Title order={3} size="h2" c="gray" mb="md">{title}</Title>
											<TextDimmed text={text} />
										</div>
										<MvButton
											type='button'
											text={<T k="portfolio.button" />}
											Icon={IconArrowRight}
										/>
									</Stack>
								</Grid.Col>
								<Grid.Col span={{ base: 12, md: 12, lg: 8 }} order={{ base: 1, sm: 2 }}>
									<Image
										radius="md"
										loading="lazy"
										src={image}
										alt={title} />
								</Grid.Col>
							</Grid>
						</CardLink>
					);
				}}
			/>
		</MvSection>
	);
};

PortfolioSection.propTypes = {
	title: PropTypes.string,
	skip: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};