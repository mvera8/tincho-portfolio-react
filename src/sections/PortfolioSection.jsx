import { Box, Button, Card, Container, Grid, Image, Title } from '@mantine/core';
import { Each, SectionTitle, TextDimmed } from '../components';
import { IconArrowUpRight } from '@tabler/icons-react';
import { useI18n } from '../i18n/useI18n.js';
import T from "../i18n/T.jsx";

export const PortfolioSection = () => {
  const { get } = useI18n();
  const worksRaw = get("portfolio.works");
  const works = Array.isArray(worksRaw) ? worksRaw : [];
  if (works.length === 0) return null;

  return (
    <Box component="section" py="xl">
      <Container size="lg" py="xl">
        <SectionTitle
          title={<T k="portfolio.title" />}
          subtitle={<T k="portfolio.subtitle" />}
          centerText
        />

        <Each
          of={works}
          render={({ id, title, text }, idx) => (
            <Grid key={id ?? idx} mb="md" align="stretch">
              <Grid.Col span={4}>
                <Card padding="xl" radius="md" withBorder style={{ height: '100%' }}>
                  <Title order={3} size="h2" c="gray">{title}</Title>
                  <TextDimmed text={text} />
                  <Button fullWidth size="md" rightSection={<IconArrowUpRight size={20} />}>
                    View Project
                  </Button>
                </Card>
              </Grid.Col>

              <Grid.Col span={8}>
                <Card radius="md" component="a" href="/portfolio-post" withBorder>
                  <Card.Section>
                    <Image radius="md" src="/cleanmax.webp" alt="Cleanmax" />
                  </Card.Section>
                </Card>
              </Grid.Col>
            </Grid>
          )}
        />
      </Container>
    </Box>
  );
};
