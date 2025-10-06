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
  IconBrandPhp, IconBrandCypress, IconBrandAdobePhotoshop, IconBrandAdobeIllustrator
} from '@tabler/icons-react';
import T from "../i18n/T.jsx";
import { useI18n } from '../i18n/useI18n.js';

const ICONS = {
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandBootstrap,
  IconBrandFigma,
  IconBrandDocker,
  IconBrandPhp,
  IconBrandCypress,
  IconBrandAdobePhotoshop,
	IconBrandAdobeIllustrator,
};

export const SkillsSection = () => {
  const { get } = useI18n();
  const itemsRaw = get("skills.items");

	const items = useMemo(() => {
    return Array.isArray(itemsRaw) ? itemsRaw : [];
  }, [itemsRaw]);

  // --- Pills de categorías ---
  const [activeCat, setActiveCat] = useState('all');

  const categories = useMemo(() => {
    const set = new Set(items.map(i => i.category).filter(Boolean));
    return ['all', ...Array.from(set)];
  }, [items]);

  const labelize = (cat) =>
    cat === 'all' ? 'All' : cat?.charAt(0).toUpperCase() + cat?.slice(1);

  const filtered = useMemo(
    () => (activeCat === 'all' ? items : items.filter(i => i.category === activeCat)),
    [items, activeCat]
  );

	if (items.length === 0) return null;

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
								const IconCmp = ICONS[icon] ?? IconBrandWordpress;
								return (
									<CardSkill key={idx} icon={IconCmp} title={title} />
								);
							}}
						/>
					</SimpleGrid>
				</Grid.Col>
			</Grid>
		</MvSection>
  );
};
