import { useMemo, useState } from 'react';
import {
  Badge, Box, Button, Card, Container, Grid, Group, SimpleGrid,
  ThemeIcon, Title, useMantineColorScheme
} from '@mantine/core';
import { Each, SectionTitle } from '../components';
import {
  IconBrandWordpress, IconBrandNextjs, IconBrandReact, IconBrandDocker,
  IconBrandBootstrap, IconBrandFigma, IconBrandHtml5, IconBrandJavascript,
  IconBrandPhp, IconBrandCypress, IconBrandAdobePhotoshop
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
};

export const SkillsSection = () => {
  const colorScheme = useMantineColorScheme();
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
    <Box bg={colorScheme.colorScheme === 'dark' ? 'dark' : 'gray.1'} component="section" py="xl">
      <Container size="lg" py="xl" mb="xl">
        <Grid mb="md" align="center">
          <Grid.Col span={3}>
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

          <Grid.Col span={9}>
            <SimpleGrid cols={6}>
              <Each
                of={filtered}
                render={({ title, icon, color, progress }, idx) => {
                  const IconCmp = ICONS[icon] ?? IconBrandWordpress;
                  return (
                    <Card key={`${title}-${idx}`} radius="md" p="md" withBorder>
                      <ThemeIcon variant="white" radius="xl" size="xl" mb="xs" mx="auto">
                        <IconCmp size={40} stroke={1.5} color={color} />
                      </ThemeIcon>
                      <Title order={4} c="gray" ta="center" mb="md">{title}</Title>
                      <Badge
                        variant={progress > 95 ? 'filled' : 'default'}
                        color="red"
                        size="xl"
                        fullWidth
                      >
                        {progress}%
                      </Badge>
                    </Card>
                  );
                }}
              />
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
