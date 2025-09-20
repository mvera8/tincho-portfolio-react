import { Box, Button, Card, Container, Grid, Group, Stack, Text, Title } from "@mantine/core"
import { IconChevronRight } from "@tabler/icons-react";
import { Each, MvImage, TextDimmed, TextList } from "../components";
import { useI18n } from "../i18n/useI18n.js";
import T from "../i18n/T.jsx";
import classes from './HeroSection.module.css';

export const HeroSection = () => {
	const { get } = useI18n();
	const bulletsRaw = get("home.bullets");
	const bullets = Array.isArray(bulletsRaw) ? bulletsRaw : []; // guard

	return (
		<Box component="section">
			<Container size="xl" pb="xl">
				<Grid align="center" py="xl">
					<Grid.Col span={5}>
						<Text size="xl" c="dimmed" mb="xs">
							<T k="home.hello" values={{ emoji: "👋" }} />
						</Text>
						<Title order={1} c="gray" className={classes.title} mb="xs">
              <Text
								className={classes.title}
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'red.5', to: 'red.2' }}
              >&quot;Tincho&quot; Vera{' '}</Text>{' '} <T k="home.title" />
						</Title>
						<TextDimmed text={<T k="home.text" />} />

						<Group>
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

					<Grid.Col span={4} offset={1}>
						<MvImage image="hero_image.webp" alt="Tincho Vera" />
					</Grid.Col>

					<Grid.Col span={2}>
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
				</Grid>
			</Container>
		</Box>
	)
}
