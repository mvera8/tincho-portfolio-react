import { Badge, Box, Button, Card, Container, Group, Image, SimpleGrid, Stack, Title, useMantineTheme } from "@mantine/core"
import { ArticleCardImage, CardBento, CardSkill, Logo, Navbar, TextDimmed, TextList } from '../components';
import { IconBook, IconBrush, IconCode, IconMapPin, IconWorld } from "@tabler/icons-react";

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
							<SimpleGrid cols={{ base: 1, xs: 3 }}>
								<CardBento title="Tech Arsenal" subtitle="My Stack" bg>
									<TextList title="56+" text="Projects" />
								</CardBento>
								<CardBento title="Tech Arsenal" subtitle="My Stack" bg>
									<TextList title="56+" text="Projects" />
								</CardBento>
								<CardBento title="Tech Arsenal" subtitle="My Stack" bg>
									<TextList title="56+" text="Projects" />
								</CardBento>
							</SimpleGrid>

							<CardBento title="Tech Arsenal" subtitle="My Stack" bg>
								<Group p="md">
									<Badge variant="default" size="lg" leftSection={ <IconMapPin size={20} color="red" />}>Uruguay</Badge>
									<Badge variant="default" size="lg" leftSection={ <IconWorld size={20} color="red" />}>Spanish & English</Badge>
									<Badge variant="default" size="lg" leftSection={ <IconCode size={20} color="red" />}>Tecnico en Diseño Web</Badge>
									<Badge variant="default" size="lg" leftSection={ <IconBrush size={20} color="red" />}>Diseñador Gráfico</Badge>
									<Badge variant="default" size="lg" leftSection={ <IconBook size={20} color="red" />}>Universidad ORT</Badge>
								</Group>
								<Group p="md" grow>
									<Button variant="default">Second</Button>
									<Button variant="default">Third</Button>
								</Group>
							</CardBento>

							
						</Stack>


						<Stack>
							<Image radius="md" src="/martin_vera.webp" alt="Cleanmax" />
							<Card withBorder>
								<Logo type="gradient" />
							</Card>
							<ArticleCardImage />
						</Stack>

						<Stack>
							<CardBento bg="red.1">
								<Logo type="gradient" />
							</CardBento>

							<CardBento title="Tech Arsenal" subtitle="My Stack" bg>
								<Stack p="md">
									<Button variant="default">Second</Button>
									<Button variant="default">Third</Button>
								</Stack>
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
