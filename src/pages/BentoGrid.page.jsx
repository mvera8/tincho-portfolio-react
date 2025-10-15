import { Box, Container, Grid, Group, Image, SimpleGrid, Stack, useMantineColorScheme, useMantineTheme } from '@mantine/core'
import { CardBento, CardSkill, GroupBadge, Logo, MvButton, Navbar, SocialMedia, TextList } from '../components';
import { IconArrowDownDashed, IconArrowRight, IconBriefcaseFilled, IconStackBack, IconSunFilled } from '@tabler/icons-react';
import T from '../i18n/T.jsx';

export const BentoGridPage = () => {
	const theme = useMantineTheme();
	const { colorScheme } = useMantineColorScheme();

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
											<SimpleGrid cols={2} pb="lg">
												<CardSkill title="Wordpress" color="red" progress="90"/>
												<CardSkill title="Wordpress" color="red" progress="90"/>
												<CardSkill title="Wordpress" color="red" progress="90"/>
												<CardSkill title="Wordpress" color="red" progress="90"/>
											</SimpleGrid>
										</CardBento>

										<CardBento title="Solutions Suite" icon={<IconBriefcaseFilled />} subtitle="Services" bg={`radial-gradient(circle 240px at 50% 100%, rgba(239,68,68,0.4), ${colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]})`}>
											<Box mx="xl" pb="lg">
												<Image
													src="/wp-admin-dashboard.webp"
													h="auto"
													alt="WordPress Dashboard"
												/>
											</Box>
										</CardBento>
									</Stack>
								</Grid.Col>

								<Grid.Col span={5}>
									<Stack>
										<CardBento bg="red.1">
											<Logo type="gradient" pb="lg" />
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
												<TextList title="56+" text="Projects" pb="lg" />
											</CardBento>
											<CardBento bg>
												<TextList title="56+" text="Projects" pb="lg" />
											</CardBento>
											<CardBento bg>
												<TextList title="56+" text="Projects" pb="lg" />
											</CardBento>
										</SimpleGrid>

										<CardBento bg>
											<GroupBadge />
											<Group pb="lg" grow>
												<MvButton
													text={<T k="home.cta1" />}
													link="/contact"
													variant="white"
													Icon={IconArrowRight}
												/>
												<MvButton
													text={<T k="home.cta2" />}
													link="/bento"
													variant="light"
													color={colorScheme.colorScheme === 'dark' ? 'gray' : 'red'}
													Icon={IconArrowDownDashed}
												/>
												
											</Group>
										</CardBento>

										<CardBento title="Online Presence" icon={<IconSunFilled />} subtitle="Follow Me" bg>
											<SocialMedia pb="lg" />
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
