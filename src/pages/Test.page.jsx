import { Box, Button, Card, Container, Grid, Image, SimpleGrid, Text, ThemeIcon, Title, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { ArticleCardImage, Each, Footer, Navbar } from '../components';
import { IconBrandWordpress, IconBrush, IconDeviceMobile, IconTopologyRing3, IconChessBishop, IconMovie, IconShoppingCart, IconSettings2 } from '@tabler/icons-react';

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


export const TestPage = () => {
	const colorScheme = useMantineColorScheme();
	const theme = useMantineTheme();

	return (
		<>
			<Navbar />
			<Container fluid>
				<div
					style={{
						//backgroundImage: `radial-gradient(circle 1000px at 100% 100px, ${theme.colors.red[3]}, transparent)`,
						// background: "linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), radial-gradient(68% 58% at 50% 50%, #c81e3a 0%, #a51d35 16%, #7d1a2f 32%, #591828 46%, #3c1722 60%, #2a151d 72%, #1f1317 84%, #141013 94%, #0a0a0a 100%), radial-gradient(90% 75% at 50% 50%, rgba(228,42,66,0.06) 0%, rgba(228,42,66,0) 55%), radial-gradient(150% 120% at 8% 8%, rgba(0,0,0,0) 42%, #0b0a0a 82%, #070707 100%), radial-gradient(150% 120% at 92% 92%, rgba(0,0,0,0) 42%, #0b0a0a 82%, #070707 100%), radial-gradient(60% 50% at 50% 60%, rgba(240,60,80,0.06), rgba(0,0,0,0) 60%), #050505",
						background: `radial-gradient(125% 125% at 50% 100%, transparent 40%, ${theme.colors.red[2]} 100%)`,
						borderTopLeftRadius: 50,
						borderTopRightRadius: 50,
						// paddingTop: 50,
					}}
				>


ssdsds
						

				</div>
			</Container>


						

						
			{/* Services section and Each cards */}
			<section style={{ borderBottom: 'solid 1px gray' }}>
				<Container size="lg" py="xl" mb="xl">
					<Grid mb="md" align="center">
						<Grid.Col span={8}>
							<Title order={2} mb="xs">Our Services</Title>
							<Text c="dimmed" size="sm" mb={0}>Unleashing Comprehensive Digital Marketing Services Tailored to Elevate Your Online Presence and Boost Your Success.</Text>
						</Grid.Col>
						<Grid.Col span={4} ta="end">
							<Button variant="defafilledult" size="lg">Get Started</Button>
						</Grid.Col>
					</Grid>
					<SimpleGrid cols={3} spacing="lg">
						<Each
							of={services}
							render={(item, index) =>
								<Card key={index} padding="xl" radius="md" style={{height: '100%'}} withBorder>
									<ThemeIcon variant="light" size="xl" color="red" radius="lg" mb="md">
										<item.icon style={{ width: '65%', height: '65%' }} />
									</ThemeIcon>

									<Title order={4}>{item.title}</Title>

									<Text mt="xs" c="dimmed" size="sm">{item.description}</Text>
								</Card>
							}
						/>
						<Card padding="xl" radius="md" style={{height: '100%', backgroundColor: colorScheme.colorScheme === 'dark' ? 'white' : 'black'}}>
							<Title order={4} c={colorScheme.colorScheme === 'dark' ? 'black' : 'white'}>Ready to elevate your online presence?</Title>
							<Text mt="xs" c="dimmed" size="sm" mb="md">Let’s build something amazing together.</Text>
							<Button variant="default">Get Started</Button>
						</Card>
					</SimpleGrid>

				</Container>
			</section>


			{/* Two cards and three cards */}
			<section style={{ borderBottom: 'solid 1px gray' }}>
				<Container size="lg" py="xl" mb="xl">
					<SimpleGrid mb="md" cols={{ base: 1, xs: 2 }}>
						<Card
							padding="xl"
							radius="md"
							withBorder
							style={{
								height: '100%',
								backgroundImage: 'radial-gradient(circle 350px at 50% 100%, rgba(239,68,68,0.4), transparent)',
							}}
						>									
							<Title order={4} mb="xs">Fast, Responsive Websites</Title>
							<Text mb="xs" c="dimmed" size="sm">I build websites that load quickly and look great on any device, ensuring your visitors have a seamless experience.</Text>

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



						<ArticleCardImage />
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
							<Title order={4} mb="xs">Fast, Responsive Websites</Title>
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
			</section>
						


			<div
				style={{
					backgroundColor: theme.colors.red[1],
					color: theme.colors.red[9],
					height: 100
				}}
			>This is a blue theme</div>
			

			

			<Footer />
		</>
	)
}
