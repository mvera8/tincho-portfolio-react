import { Image, SimpleGrid, Text, Title } from '@mantine/core'
import { CardBento, Each, Footer, MvHelmet, MvSection, Navbar, SectionTitle, TextDimmed, TextDisplay, TextList } from '../components'
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
				<Text size="xl" c="dimmed" mb="xs" ta="center">🚀 Must-to know about</Text>
				<TextDisplay gradient={item.title} align="center" />
				<TextDimmed align="center" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur tincidunt elit, nec consequat nisi dictum vel. Ut vitae orci at ligula luctus viverra." />
			</MvSection>

			{item.items &&
				<>
					<MvSection bg>
						<SectionTitle
							title={<T k="services.section.title" />}
							subtitle={<T k="services.section.subtitle" />}
							centerText
						/>
				
						<SimpleGrid mb="lg" cols={{ base: 1, xs: 2 }}>
							<Each
								of={item.items}
								render={({ title, text, bg }, idx) => (
									<CardBento
										key={idx}
										title={title}
										subtitle={text}
										bg={bg}
									>	
										<Image
											src="/wp-admin-dashboard.webp"
											h="auto"
											alt={title}
										/>
									</CardBento>
								)}
							/>
						</SimpleGrid>

						<CardBento bg>
							<SimpleGrid cols={4} mb="lg">
								<Title order={2}>WordPress Information</Title>
								<TextList title="2003" text="En ese año nace como herramienta de blogs" />
								<TextList title="43%" text="De los sitios en internet usan WordPress." />
								<TextList title="65%" text="De los CMS son WordPress" />
							</SimpleGrid>
						</CardBento>

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
