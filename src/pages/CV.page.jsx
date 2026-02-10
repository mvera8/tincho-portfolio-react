import { Avatar, Box, Container, Grid, Image, List, SimpleGrid, ThemeIcon, Title } from '@mantine/core';
import { CardBento, CardSkill, Each, GroupBadge, ResumeTable, TextDisplay } from '../components'
import {
	IconBrandWordpress, IconBrandNextjs, IconBrandReact, IconBrandDocker,
	IconBrandBootstrap, IconBrandFigma, IconBrandHtml5, IconBrandJavascript,
	IconBrandPhp, IconBrandCypress, IconBrandAdobePhotoshop, IconBrandAdobeIllustrator,
	IconAi, IconBrandCss3,
	IconPhone,
	IconMail,
	IconMapPin,
	IconAppWindow,
	IconCode,
	IconBriefcase2
} from '@tabler/icons-react';
import T from '../i18n/T.jsx';

const skills = [
	{
		'title': 'WordPress',
		'icon': IconBrandWordpress,
		'category': 'backend'
	},
	{
		'title': 'PHP',
		'icon': IconBrandPhp,
		'category': 'backend'
	},
	{
		'title': 'HTML5',
		'icon': IconBrandHtml5,
		'category': 'frontend'
	},
	{
		'title': 'CSS3',
		'icon': IconBrandCss3,
		'category': 'frontend'
	},
	{
		'title': 'JavaScript',
		'icon': IconBrandJavascript,
		'category': 'frontend'
	},
	{
		'title': 'React',
		'icon': IconBrandReact,
		'category': 'frontend'
	},
	{
		'title': 'Next.js',
		'icon': IconBrandNextjs,
		'category': 'frontend'
	},
	{
		'title': 'Bootstrap',
		'icon': IconBrandBootstrap,
		'category': 'frontend'
	},
	{
		'title': 'Figma',
		'icon': IconBrandFigma,
		'category': 'design'
	},
	{
		'title': 'Docker',
		'icon': IconBrandDocker,
		'category': 'devops'
	},
	{
		'title': 'Cypress',
		'icon': IconBrandCypress,
		'category': 'testing'
	},
	{
		'title': 'Photoshop',
		'icon': IconBrandAdobePhotoshop,
		'category': 'design'
	},
	{
		'title': 'Illustrator',
		'icon': IconBrandAdobeIllustrator,
		'category': 'design'
	},
	{
		'title': 'ChatGPT',
		'icon': IconAi,
		'category': 'ai'
	},
	{
		'title': 'Claude',
		'icon': IconAi,
		'category': 'ai'
	},
	{
		'title': 'Gemini',
		'icon': IconAi,
		'category': 'ai'
	},
	{
		'title': 'Nextjs',
		'icon': IconBrandNextjs,
		'category': 'frontend'
	}
];

export const CVPage = () => {
	return (
		<>
			<Container fluid px={0}>
				<Grid>
					<Grid.Col span={2}>
						<Avatar
							src="martin_vera.webp"
							alt="Martín Vera"
							size={120}
						/>
					</Grid.Col>
					<Grid.Col span={9}>
						<Box mb="xl">
							<TextDisplay gradient="Martín Vera" mb={0} />
							<Title order={2} c="dark" mb="xs">Desarrollador web</Title>
							<GroupBadge />
						</Box>
						<Box mb="xl">
							<Grid>
								<Grid.Col span={6}>
									<List spacing="sm">
										<List.Item
											icon={
												<ThemeIcon color="red" size={24} radius="xl">
													<IconPhone size={16} />
												</ThemeIcon>
											}
										>098 771 201</List.Item>
										<List.Item
											icon={
												<ThemeIcon color="red" size={24} radius="xl">
													<IconMail size={16} />
												</ThemeIcon>
											}
										>tinchovera8@hotmail.com</List.Item>
										<List.Item
											icon={
												<ThemeIcon color="red" size={24} radius="xl">
													<IconMapPin size={16} />
												</ThemeIcon>
											}
										>Montevideo, Uruguay</List.Item>
									</List>
								</Grid.Col>
								<Grid.Col span={6}>
									<List spacing="sm">
										<List.Item
											icon={
												<ThemeIcon color="red" size={24} radius="xl">
													<IconAppWindow size={16} />
												</ThemeIcon>
											}
										>https://martinvera.com.uy</List.Item>
										<List.Item
											icon={
												<ThemeIcon color="red" size={24} radius="xl">
													<IconCode size={16} />
												</ThemeIcon>
											}
										>https://github.com/tinchovera</List.Item>
										<List.Item
											icon={
												<ThemeIcon color="red" size={24} radius="xl">
													<IconBriefcase2 size={16} />
												</ThemeIcon>
											}
										>https://www.linkedin.com/in/tincho8/</List.Item>
									</List>
								</Grid.Col>
							</Grid>
						</Box>

						<Box mb="xl">
							<Title order={2} c="red" mb="sm">Profile</Title>
							<T k="about.text" />
						</Box>

						<Box mb="xl">
							<Title order={2} c="red" mb={0}>Experience</Title>
							<ResumeTable />
						</Box>

						<Box mb="xl">
							<Title order={2} c="red" mb="sm">Skills</Title>
							<SimpleGrid cols={4}>
								<Each
									of={skills}
									render={({ title, icon }, idx) => {
										return (
											<CardSkill
												key={idx}
												icon={icon}
												title={title}
												size="sm"
											/>
										);
									}}
								/>
							</SimpleGrid>
						</Box>

						<Box mb="xl">
							<Grid>
								<Grid.Col span={6}>
									<CardBento title="Cleanmax" subtitle="WordPress" bg>
										<Image
											src="cleanmax.webp"
											alt="Cleanmax"
											size={120}
										/>
									</CardBento>
								</Grid.Col>
								<Grid.Col span={6}>
									<CardBento title="Portfolio Personal" subtitle="React" bg>
										<Image
											src="site.webp"
											alt="Portfolio Personal"
											size={120}
										/>
									</CardBento>
								</Grid.Col>
							</Grid>
						</Box>
					</Grid.Col>
				</Grid>
			</Container>
		</>
	)
}
