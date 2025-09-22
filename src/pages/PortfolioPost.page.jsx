import { Box, Card, Container, Grid, Image, Stack, Title } from '@mantine/core';
import { CardIcon, Footer, Navbar, TextList } from '../components';
import { ContactSection, FaqsSection } from '../sections';

export const PortfolioPostPage = () => {
	return (
		<>
			<Navbar />
			<Box component="section">
				<Container size="xl" pb="xl" mb="xl">
					<Grid align="center" pt="xl">
						<Grid.Col span={10}>
							<Title order={1} mb="xl">Cleanmax Website</Title>
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
				</Container>
			</Box>
			<FaqsSection />
			<ContactSection />
			<Footer />
		</>
	)
}
