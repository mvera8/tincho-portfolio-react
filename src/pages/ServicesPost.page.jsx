import { Button, Card, Image, SimpleGrid, Text, Title, useMantineColorScheme } from "@mantine/core"
import { CardBento, Each, Footer, MvSection, Navbar, SectionTitle, TextDimmed, TextDisplay, TextList } from "../components"
import { FaqsSection } from "../sections"
import { IconChevronRight } from "@tabler/icons-react";
import T from "../i18n/T.jsx";
import { Navigate, useParams } from "react-router-dom";
import { useI18n } from "../i18n/useI18n.js";
import { useMemo } from "react";
import { slugify } from "../helpers/slugify.js";

export const ServicesPostPage = () => {
	const { colorScheme } = useMantineColorScheme();
	const { slug } = useParams();
	const { get } = useI18n();

	const itemsRaw = get("services.items");
	const items = Array.isArray(itemsRaw) ? itemsRaw : [];

	// Busca el item por slug
	const item = useMemo(() => {
		const bySlug = new Map(items.map((p) => [slugify(p.id), p]));
		return bySlug.get(slug);
	}, [items, slug]);

	if (!item) {
		// 404 elegante: vuelve al listado o a una página de no encontrado
		return <Navigate to="/services" replace />;
	}

	return (
		<>
			<Navbar />
			<MvSection size="sm">
				<Text size="xl" c="dimmed" mb="xs" ta="center">🚀 Must-to know about</Text>
				<TextDisplay gradient={item.title} align="center" />
				<TextDimmed align="center" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur tincidunt elit, nec consequat nisi dictum vel. Ut vitae orci at ligula luctus viverra." />
			</MvSection>

			{item.items &&
				<>
					<MvSection padding="xs">
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

						<Card p="xl" radius="md" bg={colorScheme === "dark" ? "dark" : "gray.1"}>
							<SimpleGrid cols={4}>
								<Title order={2}>WordPress Information</Title>
								<TextList title="2003" text="En ese año nace como herramienta de blogs" />
								<TextList title="43%" text="De los sitios en internet usan WordPress." />
								<TextList title="65%" text="De los CMS son WordPress" />
							</SimpleGrid>
						</Card>

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
