import { Box, Button, Card, Container, Grid, Image, Title } from '@mantine/core'
import { SectionTitle, TextDimmed } from '../components'
import { IconArrowUpRight } from '@tabler/icons-react'

export const PortfolioSection = () => {
	return (
		<Box component="section" py="xl">
			<Container size="lg" py="xl" mb="xl">
				<SectionTitle
					title="Explore My Popular Projects"
					subtitle="Latest Work"
					centerText
				/>
				<Grid mb="mb">
					<Grid.Col span={4}>
						<Card padding="xl" radius="md" withBorder style={{height: '100%'}}>
							<Title order={3} size="h2" c="gray">Cleanmax Website</Title>
							<TextDimmed text="Please click anywhere on this card to claim your reward, this is not a fraud, trust us" />
							<Button fullWidth size="md" rightSection={<IconArrowUpRight size={20} />}>View Project</Button>
						</Card>
					</Grid.Col>
					<Grid.Col span={8}>
						<Card radius="md" component="a" href="/portfolio-post" withBorder>
							<Card.Section>
								<Image
									radius="md"
									src="/public/cleanmax.webp"
									alt='Cleanmax'
								/>
							</Card.Section>
						</Card>
					</Grid.Col>
				</Grid>
			</Container>
		</Box>	
	)
}
