import { Box, Card, Container, Grid, SimpleGrid, Text, ThemeIcon, Title } from "@mantine/core"
import { SectionTitle } from "../components"
import { IconBrandWordpress, IconBrush, IconChessBishop, IconDeviceMobile, IconMovie, IconSettings2, IconShoppingCart, IconTopologyRing3 } from "@tabler/icons-react"
import T from "../i18n/T.jsx";

const services = [
	{ title: 'WordPress Development', icon: IconBrandWordpress, description: 'Custom themes, plugin integrations, and site optimization for a seamless WordPress experience.' },
	{ title: 'Mobile App Design & Development', icon: IconDeviceMobile, description: 'Fast & scalable React / Next.js apps with modern UI.' },
	{ title: 'UI/UX Design System Creation', icon: IconBrush, description: 'Accessible, mobile-first interfaces that feel native on any device.' },
	{ title: 'Branding & Visual Identity', icon: IconTopologyRing3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' },
	{ title: 'Consultation & Strategy', icon: IconChessBishop, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' },
	{ title: 'Video Edition Services', icon: IconMovie, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' },
	// { title: 'SEO Optimization', icon: IconPhoto, description: 'Boost your site’s visibility and attract more organic traffic with proven SEO strategies.' },
	{ title: 'E-commerce Solutions', icon: IconShoppingCart, description: 'Robust online stores with seamless user experiences to drive sales and customer satisfaction.' },
	{ title: 'Cypress E2E Testing', icon: IconSettings2, description: 'Stable suites, visual checks, and practical coverage that pays for itself.' },
];

const rows = services.map((serv, index) => (
	<Card
		key={index}
		radius="md"
		padding="xl"
		component="a"
		href="/service-post"
		withBorder>
			<Grid>
				<Grid.Col span={2}>
					<Text size="xl" c="gray">.0{index+1}</Text>
				</Grid.Col>
				<Grid.Col span={8}>
					<Title order={4} c="gray">{serv.title}</Title>
					<Text c="dimmed" truncate="end">{serv.description}</Text>
				</Grid.Col>
				<Grid.Col span={2} ta="end">
					<ThemeIcon variant="light" color="red" radius="xl" size="xl">
						<serv.icon size={22} />
					</ThemeIcon>
				</Grid.Col>
			</Grid>
	</Card>
));

export const ServicesSection = () => {
	return (
		<Box component="section" py="xl">
			<Container size="lg" py="xl" mb="xl">
				<SectionTitle
					title={<T k="services.title" />}
					subtitle={<T k="services.subtitle" />}
					centerText
				/>

				<SimpleGrid cols={2}>
					{rows}
				</SimpleGrid>
			</Container>
		</Box>
	)
}
