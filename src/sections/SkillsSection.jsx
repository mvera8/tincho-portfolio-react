import { Badge, Box, Card, Container, Grid, SimpleGrid, ThemeIcon, Title, useMantineColorScheme } from '@mantine/core';
import { SectionTitle } from '../components';
import { IconBrandWordpress, IconBrandNextjs, IconBrandReact, IconBrandDocker, IconBrandBootstrap, IconBrandFigma, IconBrandHtml5, IconBrandJavascript } from '@tabler/icons-react';

const skills = [
	{ title: 'WordPress', icon: IconBrandWordpress, color: 'black', progress: 99 },
	{ title: 'HTML5', icon: IconBrandHtml5, color: 'orange', progress: 90 },
	{ title: 'JavaScript', icon: IconBrandJavascript, color: 'red', progress: 90 },
	{ title: 'React', icon: IconBrandReact, color: 'blue', progress: 90 },
	{ title: 'Next JS', icon: IconBrandNextjs, color: 'black', progress: 90 },
	{ title: 'Bootstrap', icon: IconBrandBootstrap, color: 'purple', progress: 90 },
	{ title: 'Figma', icon: IconBrandFigma, color: 'teal', progress: 90 },
	{ title: 'Docker', icon: IconBrandDocker, color: 'blue', progress: 90 },
];

const rows = skills.map((ski, index) => (
	<Card
		key={index}
		radius="md"
		px="lg"
		py="lg"
		withBorder>
		<ThemeIcon variant="white" radius="xl" size="xl" mb="md" mx="auto">
			<ski.icon size={30} color={ski.color} />
		</ThemeIcon>
		<Title order={4} c="gray" ta="center" mb="md">{ski.title}</Title>
		<Badge variant={ski.progress > 95  ? 'filled' : 'default'} color="red" size="xl" fullWidth>{ski.progress}%</Badge>
	</Card>
));

export const SkillsSection = () => {
	const colorScheme = useMantineColorScheme();

	return (
		<Box bg={colorScheme.colorScheme === 'dark' ? 'dark' : 'gray.1'} component="section" py="xl">
			<Container size="lg" py="xl" mb="xl">
				<Grid mb="md" align="center">
					<Grid.Col span={4}>
						<SectionTitle
							title="Profesional Problem Solutions For Digital Products"
							subtitle="About Me"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis eget justo quis semper. Maecenas facilisis sapien ipsum, at malesuada ligula ultricies at."
						/>
					</Grid.Col>
					<Grid.Col span={7} offset={1}>
						<SimpleGrid cols={4}>
							{rows}
						</SimpleGrid>
					</Grid.Col>
				</Grid>
			</Container>
		</Box>	
	)
}
