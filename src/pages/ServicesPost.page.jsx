import { Center, Flex, Grid, Image, SimpleGrid, Text } from '@mantine/core'
import { CardBento, Footer, MvHelmet, MvSection, Navbar, SectionTitle, TextDimmed, TextDisplay } from '../components'
import { FaqsSection } from '../sections'
import { Navigate, useParams } from 'react-router-dom';
import { useI18n } from '../i18n/useI18n.js';
import { useMemo } from 'react';
import T from '../i18n/T.jsx';

export const ServicesPostPage = () => {
	const { slug } = useParams();
	const { get } = useI18n();

	const item = useMemo(() => {
		const list = Array.isArray(get('services.items')) ? get('services.items') : [];
		return list.find((p) => p.slug === slug);
	}, [get, slug]);

	if (!item) {
		return <Navigate to="/services" replace />;
	}

	return (
		<>
			<MvHelmet page={item.title} slug={slug} />
			<Navbar />
			<MvSection size="sm">
				<Text size="xl" c="dimmed" mb="xs" ta="center">
					<T k="services.single.badge" values={{ emoji: '🚀' }} />
				</Text>
				<TextDisplay gradient={item.title} align="center" />
				<TextDimmed align="center" text={item.description} />
			</MvSection>

			{item.items &&
				<>
					<MvSection bg>
						<SectionTitle
							title={<T k="services.single.title" />}
							subtitle={<T k="services.single.subtitle" />}
							centerText
						/>

						<SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" mb="md">
							{/* Columna izquierda: el primer item en grande */}
							{item.items[0] && (
								<CardBento
									title={item.items[0].title}
									subtitle={item.items[0].text}
									bg={item.items[0].bg}
								>
									<Flex
										h="100%"
										gap="md"
										justify="center"
										align="flex-end"
										direction="row"
										wrap="wrap"
									>
										<Image
											src={'/' + item.items[0].image + '.webp'}
											h={400}
											alt={item.items[0].title}
											loading="lazy"
										/>
									</Flex>
								</CardBento>
							)}

							{/* Columna derecha con grid interno */}
							<Grid gutter="md">
								{/* Item 2 arriba */}
								{item.items[1] && (
									<Grid.Col>
										<CardBento
											title={item.items[1].title}
											subtitle={item.items[1].text}
											bg={item.items[1].bg}
										>
											<Center>
												<Image
													src={'/' + item.items[1].image + '.webp'}
													h={160}
													w="auto"
													alt={item.items[1].title}
													loading="lazy"
												/>
											</Center>
										</CardBento>
									</Grid.Col>
								)}

								{/* Item 3 y 4 lado a lado */}
								{item.items.slice(2, 4).map((card, idx) => (
									<Grid.Col key={idx} span={6}>
										<CardBento
											title={card.title}
											subtitle={card.text}
											bg={card.bg}
										>
											<Center>
												<Image
													src={'/' + card.image + '.webp'}
													h={140}
													w="auto"
													alt={card.title}
													loading="lazy"
													pb="md"
												/>
											</Center>
										</CardBento>
									</Grid.Col>
								))}
							</Grid>
						</SimpleGrid>
						{/* Item 3 y 4 lado a lado */}
						{item.items[4] && (
							<CardBento
								title={item.items[4].title}
								subtitle={item.items[4].text}
								bg={item.items[4].bg}
							/>
						)}
					</MvSection>

				</>
			}
			{item.faqs &&
				<FaqsSection faqs={item.faqs} />
			}			
			<Footer />
		</>
	)
}
