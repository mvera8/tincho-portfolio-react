import { Box, Button, Card, Container, Grid, Group, Stack, Text, Title } from "@mantine/core"
import { IconChevronRight } from "@tabler/icons-react";
import { Each, MvImage, TextDimmed, TextList } from "../components";
import { useI18n } from "../i18n/useI18n.js";
import T from "../i18n/T.jsx";
import classes from './HeroSection.module.css';

export const HeroSection = () => {
	const { get } = useI18n();
	const bulletsRaw = get("home.bullets");
	const bullets = Array.isArray(bulletsRaw) ? bulletsRaw : [];

	return (
		<Box component="section">
			<Container size="xl" pb="xl">
				<Grid justify="center" align="center" py={{base: "md", lg: "xl" }}>
					<Grid.Col span={{ base: 12, md: 12, lg: 5 }}>
						<Text size="xl" c="dimmed" mb="xs">
							<T k="home.hello" values={{ emoji: "👋" }} />
						</Text>
						<Title order={1} c="gray" fw={900} className={classes.title} mb="xs">
              <Text
                component="div"
                inherit
                variant="gradient"
                gradient={{ from: 'red.4', to: 'red.8' }}
              >&quot;Tincho&quot; Vera{' '}</Text>{' '} <T k="home.title" />
						</Title>
						<TextDimmed text={<T k="home.text" />} />

						<Group mt="xl">
							<Button
								variant="filled"
								color="red"
								size="md"
								rightSection={<IconChevronRight size={20} />}>
									<T k="home.cta1" />
								</Button>
							<Button
								variant="default"
								size="md"
								rightSection={<IconChevronRight color="red" size={20} />}>
									<T k="home.cta2" />
								</Button>
						</Group>
					</Grid.Col>

					<Grid.Col span={{ base: 12, md: 12, lg: 4 }} offset={{ md: 0, lg: 1 }}>
						<MvImage image="hero_image.webp" alt="Tincho Vera" />
					</Grid.Col>

					{bullets.length > 0 &&
						<Grid.Col span={{ base: 12, md: 12, lg: 2 }}>
							<Card p="xl" radius="md">
								<Stack
									h={300}
									align="stretch"
									justify="center"
								>
									<Each
										of={bullets}
										render={({ title, text }, idx) => (
											<TextList
												key={`${title}-${idx}`}
												title={title}
												text={text}
												showDivider={idx < bullets.length - 1}
											/>
										)}
									/>
								</Stack>
							</Card>
						</Grid.Col>
					}					
				</Grid>
			</Container>
		</Box>
	)
}
