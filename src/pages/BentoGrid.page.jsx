import { Box, Card, Container, Image, SimpleGrid, Stack, Title, useMantineTheme } from "@mantine/core"
import { ArticleCardImage, CardBento, CardSkill, Logo, Navbar, TextDimmed } from '../components';

export const BentoGridPage = () => {
	const theme = useMantineTheme();

	return (
		<>
			<Navbar />
			<div
				style={{
					background: `radial-gradient(125% 125% at 50% 10%, transparent 40%, ${theme.colors.red[8]} 100%)`,
					padding: '20px 0'
				}}>
				<Container fluid>
					<SimpleGrid cols={{ base: 1, xs: 4 }}>
						<Stack>
							<CardBento title="Tech Arsenal" subtitle="My Stack" bg>
								<SimpleGrid cols={2} p="md" pt={0}>
									<CardSkill title="Wordpress" color="red" progress="90"/>
									<CardSkill title="Wordpress" color="red" progress="90"/>
									<CardSkill title="Wordpress" color="red" progress="90"/>
									<CardSkill title="Wordpress" color="red" progress="90"/>
								</SimpleGrid>
							</CardBento>

							<CardBento title="Solutions Suite" subtitle="Services" bg>
								<div
									style={{
										backgroundImage: `radial-gradient(circle 240px at 50% 100%, rgba(239,68,68,0.4), transparent)`,
									}}
								>
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
								</div>
								
							</CardBento>
						</Stack>

						<Stack>
							<Card withBorder>
								<Logo type="gradient" />
							</Card>
							<ArticleCardImage />
						</Stack>

						<Stack>
							<CardBento bg="red.1">
								<Logo type="gradient" />
							</CardBento>
							
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
						</Stack>

						<Stack>
							<Card bg="red.9">
								a
							</Card>
							<Card bg="red.7">
								b
							</Card>
							<Image radius="md" src="/cleanmax.webp" alt="Cleanmax" />
						</Stack>
					</SimpleGrid>
				</Container>
			</div>
		</>
	)
}
