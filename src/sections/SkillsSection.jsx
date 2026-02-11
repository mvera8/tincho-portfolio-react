import { useMemo, useState } from 'react';
import {
	Button,
	Grid,
	Group,
	SimpleGrid,
} from '@mantine/core';
import { CardSkill, Each, MvSection, SectionTitle } from '../components';
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
	},
	{
		'title': 'Nextjs',
		'icon': IconBrandNextjs,
		'category': 'frontend'
	}
];

export const SkillsSection = () => {
	// --- Pills de categorías ---
	const [activeCat, setActiveCat] = useState('all');

	const categories = useMemo(() => {
		const set = new Set(skills.map(i => i.category).filter(Boolean));
		return ['all', ...Array.from(set)];
	}, []);

	const labelize = (cat) =>
		cat === 'all' ? 'All' : cat?.charAt(0).toUpperCase() + cat?.slice(1);

	const filtered = useMemo(
		() => (activeCat === 'all' ? skills : skills.filter(i => i.category === activeCat)),
		[activeCat]
	);

	if (skills.length === 0) return null;

	return (
		<MvSection bg>
			<Grid mb="md" align="center">
				<Grid.Col span={{ base: 12, md: 12, lg: 3 }}>
					<SectionTitle
						title={<T k="skills.title" />}
						subtitle={<T k="skills.subtitle" />}
					/>
					<Group gap="xs" mt="md" wrap="wrap">
						{categories.map((cat) => (
							<Button
								key={cat}
								radius="xl"
								variant={activeCat === cat ? 'filled' : 'light'}
								color="red"
								onClick={() => setActiveCat(cat)}
								aria-pressed={activeCat === cat}
							>
								{labelize(cat)}
							</Button>
						))}
					</Group>
				</Grid.Col>

				<Grid.Col span={{ base: 12, md: 12, lg: 9 }}>
					<SimpleGrid cols={{ base: 2, md: 2, lg: 4 }}>
						<Each
							of={filtered}
							render={({ title, icon }, idx) => {
								return (
									<CardSkill key={idx} icon={icon} title={title} />
								);
							}}
						/>
					</SimpleGrid>
				</Grid.Col>
			</Grid>
		</MvSection>
	);
};
