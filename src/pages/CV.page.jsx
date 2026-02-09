import { Box, Container, Grid, Image, SimpleGrid, Title } from '@mantine/core';
import { CardBento, CardSkill, Each, GroupBadge, ResumeTable, SocialMedia } from '../components'
import {
	IconBrandWordpress, IconBrandNextjs, IconBrandReact, IconBrandDocker,
	IconBrandBootstrap, IconBrandFigma, IconBrandHtml5, IconBrandJavascript,
	IconBrandPhp, IconBrandCypress, IconBrandAdobePhotoshop, IconBrandAdobeIllustrator,
	IconAi, IconBrandCss3
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
	}
];

export const CVPage = () => {
	return (
		<>
			<Container fluid px={0}>
				<Grid>
					<Grid.Col span={4}>
						<CardBento bg="dark">
							<Image src="hero_image.webp" alt="Martín Vera" />
							<Box p="md">
								<Title order={1} c="red">Martín Vera</Title>
								<GroupBadge />
								<Title order={2} c="red">Contacto</Title>
								<SocialMedia />
							</Box>
						</CardBento>

					</Grid.Col>
					<Grid.Col span={8}>
						<Title order={2} c="red">Profile</Title>
						<T k="about.text" />

						<Title order={2} c="red">Experience</Title>
						<ResumeTable />

						<Title order={2} c="red">Skills</Title>
						<SimpleGrid cols={{ base: 2, md: 2, lg: 4 }}>
							<Each
								of={skills}
								render={({ title, icon }, idx) => {
									return (
										<CardSkill key={idx} icon={icon} title={title} />
									);
								}}
							/>
						</SimpleGrid>
					</Grid.Col>
				</Grid>
			</Container>
		</>
	)
}
