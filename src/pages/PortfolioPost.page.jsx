import { Card, Grid, Image, Stack, Title } from '@mantine/core';
import { CardIcon, Footer, MvSection, Navbar, TextList } from '../components';
import { FaqsSection } from '../sections';
import { ReactCompareSlider } from 'react-compare-slider';

export const PortfolioPostPage = () => {
	return (
		<>
			<Navbar />
			<MvSection>
				<Grid align="center" pt="xl">
					<Grid.Col span={10}>
						<Title order={1} mb="xl">Cleanmax Website</Title>

						<ReactCompareSlider
							itemOne={<Image src="/martin_vera_bits.webp" alt="Image one" />}
							itemTwo={<Image src="/martin_vera_draw.webp" alt="Image two" />}
						/>

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
			</MvSection>
			<FaqsSection />
			<Footer />
		</>
	)
}
