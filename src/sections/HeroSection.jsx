import { Button, Card, Grid, Group, Stack, Text } from "@mantine/core"
import { IconArrowDownDashed, IconArrowRight } from "@tabler/icons-react";
import { Each, MvImage, MvSection, SocialMedia, TextDimmed, TextDisplay, TextList } from "../components";
import { useI18n } from "../i18n/useI18n.js";
import T from "../i18n/T.jsx";

export const HeroSection = () => {
	const { get } = useI18n();
	const bulletsRaw = get("home.bullets");
	const bullets = Array.isArray(bulletsRaw) ? bulletsRaw : [];

	return (
		<MvSection size="xl" padding="xs">
			<Grid justify="center" align="center" pb="xl" pt="md">
				<Grid.Col span={{ base: 12, md: 12, lg: 5 }}>
					<Text size="xl" c="gray" mb="xs">
						<T k="home.hello" values={{ emoji: "👋", name: '"Tincho" Vera' }} />
					</Text>
					<TextDisplay gradient={<T k="home.title" />} />
					<TextDimmed text={<T k="home.text" />} />

					<Group mt="xl">
						<Button
							component="a"
							href="/contact"
							variant="filled"
							color="red"
							size="md"
							radius="xl"
							rightSection={<IconArrowRight size={20} />}>
								<T k="home.cta1" />
						</Button>
						<Button
							component="a"
							href="/contact"
							variant="light"
							size="md"
							radius="xl"
							rightSection={<IconArrowDownDashed size={20} />}>
								<T k="home.cta2" />
						</Button>
						<SocialMedia type="icon" />
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
		</MvSection>
	)
}
