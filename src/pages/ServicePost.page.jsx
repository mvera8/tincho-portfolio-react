import { Box, Button, Card, Container, Image, SimpleGrid, Text, Title, useMantineTheme } from "@mantine/core"
import { ArticleCardImage, Footer, Navbar, SectionTitle, TextDimmed, TextDisplay, TextList } from "../components"
import { FaqsSection } from "../sections"
import { IconChevronRight } from "@tabler/icons-react";
import T from "../i18n/T.jsx";
import { Navigate, useParams } from "react-router-dom";
import { useI18n } from "../i18n/useI18n.js";
import { useMemo } from "react";
import { slugify } from "../helpers/slugify.js";

export const ServicePostPage = () => {
	const theme = useMantineTheme();
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
			<Box component="section">
				<Container size="sm" py="xl" style={{ textAlign: 'center' }}>
					<Text size="xl" c="dimmed" mb="xs">🚀 Must-to know about</Text>
					<TextDisplay gradient={item.title} />
					<TextDimmed align="center" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur tincidunt elit, nec consequat nisi dictum vel. Ut vitae orci at ligula luctus viverra." />

					<Button
						variant="filled"
						color="red"
						size="md"
						mt="md"
						rightSection={<IconChevronRight size={20} />}>See More</Button>
				</Container>
			</Box>	

			<Box component="section" py="xl">
				<Container size="lg" pt="md">
					<SectionTitle
						title={<T k="services.section.title" />}
						subtitle={<T k="services.section.subtitle" />}
						centerText
					/>
					
					<SimpleGrid mb="xl" cols={{ base: 1, xs: 2 }}>
						<Card
							padding="xl"
							radius="md"
							withBorder
							style={{
								height: '100%',
								backgroundImage: `radial-gradient(circle 350px at 50% 100%, rgba(239,68,68,0.4), transparent)`,
							}}
						>									
							<Title order={4} mb="xs">Fast, Responsive Websites</Title>
							<TextDimmed text="I build websites that load quickly and look great on any device, ensuring your visitors have a seamless experience." />

							<Card.Section>
								<Box
									mx="xl"
									p="xl"
									pb={0}>
									<Image
										src="/wp-admin-dashboard.webp"
										h="auto"
										alt="WordPress Dashboard"
									/>
								</Box>
							</Card.Section>
						</Card>

						<Card
							padding="xl"
							radius="md"
							bg={theme.colors.red[1]}
							withBorder>									
							
							<Card.Section>
								<Box
									mx="xl"
									p="xl"
									pt={0}>
									<Image
										src="/wp-admin-dashboard.webp"
										h="auto"
										alt="WordPress Dashboard"
									/>
								</Box>
							</Card.Section>

							<Title order={4} c="dark" mb="xs">Fast, Responsive Websites</Title>
							<TextDimmed text="I build websites that load quickly and look great on any device, ensuring your visitors have a seamless experience." />

						</Card>

					</SimpleGrid>
					<SimpleGrid cols={{ base: 1, xs: 3 }}>
						<Card
							padding="xl"
							radius="md"
							withBorder
							style={{
								height: '100%',
							}}
						>									
							<Title order={4} mb="xs">Custom themes and plugins</Title>
							<Card.Section>
								<Box
									p="xl"
									pb={0}>
									<Image
										src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
										height={100}
										alt="Norway"
									/>
								</Box>
							</Card.Section>
						</Card>
						<ArticleCardImage />
						<ArticleCardImage />
					</SimpleGrid>
				</Container>
			</Box>	

			<Box component="section">
				<Container size="lg">
					<Card p="xl" radius="md">
						<SimpleGrid cols={4}>
							<Title order={2}>WordPress Information</Title>
							<TextList title="2003" text="En ese año nace como herramienta de blogs" />
							<TextList title="43%" text="De los sitios en internet usan WordPress." />
							<TextList title="65%" text="De los CMS son WordPress" />
						</SimpleGrid>
						
					</Card>
				</Container>
			</Box>

			<FaqsSection />
			<Footer />
		</>
	)
}
