import { Badge, Box, Button, Container, Grid, Group, Image, SimpleGrid, Stack, useMantineTheme } from "@mantine/core"
import { CardBento, CardSkill, Logo, Navbar, SocialMedia, TextList } from '../components';
import { IconArrowDownDashed, IconArrowRight, IconBook, IconBriefcaseFilled, IconBrush, IconCode, IconMapPin, IconStackBack, IconSunFilled, IconWorld } from "@tabler/icons-react";
import T from "../i18n/T.jsx";

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
					<Grid>
						<Grid.Col span={8}>
							<Grid>
								<Grid.Col span={7}>
									<Stack>
										<CardBento title="Tech Arsenal" icon={<IconStackBack />} subtitle="My Stacks" bg>
											<SimpleGrid cols={2}>
												<CardSkill title="Wordpress" color="red" progress="90"/>
												<CardSkill title="Wordpress" color="red" progress="90"/>
												<CardSkill title="Wordpress" color="red" progress="90"/>
												<CardSkill title="Wordpress" color="red" progress="90"/>
											</SimpleGrid>
										</CardBento>

										<CardBento title="Solutions Suite" icon={<IconBriefcaseFilled />} subtitle="Services" bg>
											<div
												style={{
													backgroundImage: `radial-gradient(circle 240px at 50% 100%, rgba(239,68,68,0.4), transparent)`,
												}}
											>
												<Box mx="xl">
													<Image
														src="/wp-admin-dashboard.webp"
														h="auto"
														alt="WordPress Dashboard"
													/>
												</Box>
											</div>
										</CardBento>
									</Stack>
								</Grid.Col>

								<Grid.Col span={5}>
									<Stack>
									<CardBento bg="red.1">
										<Logo type="gradient" />
									</CardBento>
										<Image radius="md" src="/martin_vera.webp" alt="Cleanmax" />

										
									</Stack>
								</Grid.Col>
							</Grid>
						</Grid.Col>


						<Grid.Col span={4}>
							<Grid>
								<Grid.Col span={12}>
									<Stack>
										<SimpleGrid cols={{ base: 1, xs: 3 }}>
											<CardBento bg>
												<TextList title="56+" text="Projects" />
											</CardBento>
											<CardBento bg>
												<TextList title="56+" text="Projects" />
											</CardBento>
											<CardBento bg>
												<TextList title="56+" text="Projects" />
											</CardBento>
										</SimpleGrid>

										<CardBento bg>
											<Group gap="xs" mb="md">
												<Badge variant="default" size="lg" leftSection={ <IconMapPin size={20} color="red" />}>Uruguay</Badge>
												<Badge variant="default" size="lg" leftSection={ <IconWorld size={20} color="red" />}>Spanish & English</Badge>
												<Badge variant="default" size="lg" leftSection={ <IconCode size={20} color="red" />}>Tecnico en Diseño Web</Badge>
												<Badge variant="default" size="lg" leftSection={ <IconBrush size={20} color="red" />}>Diseñador Gráfico</Badge>
												<Badge variant="default" size="lg" leftSection={ <IconBook size={20} color="red" />}>Universidad ORT</Badge>
											</Group>
											<Group grow>
											<Button
												variant="filled"
												color="red"
												size="md"
												rightSection={<IconArrowRight size={20} />}>
													<T k="home.cta1" />
											</Button>
											<Button
												variant="subtle"
												size="md"
												rightSection={<IconArrowDownDashed size={20} />}>
													<T k="home.cta2" />
											</Button>
												
											</Group>
										</CardBento>

										<CardBento title="Online Presence" icon={<IconSunFilled />} subtitle="Follow Me" bg>
										<SocialMedia />
									</CardBento>
									</Stack>
									

								</Grid.Col>


							</Grid>
						</Grid.Col>
					</Grid>



					
				</Container>
			</div>
		</>
	)
}
