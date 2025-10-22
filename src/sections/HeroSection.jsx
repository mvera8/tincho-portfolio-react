import { Card, Grid, Group, Stack, Text, useMantineColorScheme } from '@mantine/core'
import { IconArrowDownDashed, IconArrowRight } from '@tabler/icons-react';
import { Each, MvButton, MvImage, MvSection, TextDimmed, TextDisplay, TextList } from '../components';
import { useI18n } from '../i18n/useI18n.js';
import { isMobile } from 'react-device-detect';
import T from '../i18n/T.jsx';

export const HeroSection = () => {
	const colorScheme = useMantineColorScheme();
	const { get } = useI18n();
	const bulletsRaw = get('home.bullets');
	const bullets = Array.isArray(bulletsRaw) ? bulletsRaw : [];

	return (
		<MvSection size="xl" padding="xs">
			<Grid justify="center" align="center" pb="xl" pt="md">
				<Grid.Col span={{ base: 12, md: 12, lg: 5 }}>
					<Text size="xl" c="gray" mb="xs">
						<T k="home.hello" values={{ emoji: '👋', name: '"Tincho" Vera' }} />
					</Text>
					<TextDisplay gradient={<T k="home.title" />} />
					<TextDimmed text={<T k="home.text" />} />

					<Group mt="xl">
						<MvButton
							text={<T k="home.cta1" />}
							link="/contact"
							variant={isMobile ? 'filled' : 'white'}
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
