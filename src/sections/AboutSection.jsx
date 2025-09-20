import { Box, Card, Container, Grid, useMantineColorScheme } from '@mantine/core';
import { MvImage, MvList, SectionTitle } from '../components';
import T from "../i18n/T.jsx";

export const AboutSection = () => {
	const colorScheme = useMantineColorScheme();

	return (
		<Box bg={colorScheme.colorScheme === 'dark' ? 'dark' : 'gray.1'} component="section" py="xl">
			<Container size="lg" py="xl" mb="xl">
				<Grid mb="md" align="center">
					<Grid.Col span={6}>
						<SectionTitle
							title={<T k="about.title" />}
							subtitle={<T k="about.subtitle" />}
							text={<T k="about.text" />}
						/>
						<MvList />
						<Card mb={10} shadow="xs" withBorder>
							lala
						</Card>
					</Grid.Col>
					<Grid.Col span={5} offset={1}>
						<MvImage image="martin_vera.webp" alt="Tincho Vera" />
					</Grid.Col>
				</Grid>
			</Container>
		</Box>	
	)
}
