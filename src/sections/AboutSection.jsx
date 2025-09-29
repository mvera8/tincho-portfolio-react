import { Box, Card, Container, Grid, useMantineColorScheme } from '@mantine/core';
import { MvImage, MvList, SectionTitle, SocialMedia } from '../components';
import T from "../i18n/T.jsx";

export const AboutSection = () => {
	const colorScheme = useMantineColorScheme();

	return (
		<Box bg={colorScheme.colorScheme === 'dark' ? 'dark' : 'gray.1'} component="section" py="xl">
			<Container size="lg" py="xl" mb="xl">
				<Grid mb="md" align="center">
					<Grid.Col span={{ base: 12, md: 12, lg: 6 }}>
						<SectionTitle
							title={<T k="about.title" />}
							subtitle={<T k="about.subtitle" />}
							text={<T k="about.text" />}
						/>
						<MvList />
						<Card mb={10} shadow="xs" withBorder>
							<SocialMedia align="flex-start" />
						</Card>
					</Grid.Col>
					<Grid.Col span={{ base: 12, md: 12, lg: 5 }} offset={{ md: 0, lg: 1 }}>
						<MvImage image="martin_vera_toy.webp" alt="Tincho Vera" />
					</Grid.Col>
				</Grid>
			</Container>
		</Box>	
	)
}
