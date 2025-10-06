import { Image, SimpleGrid, Title } from '@mantine/core';
import { CardBento, Each, MvSection, SectionTitle } from '../components';
import { useI18n } from '../i18n/useI18n.js';
import { slugify } from '../helpers/slugify';
import { Link } from 'react-router-dom';
import T from "../i18n/T.jsx";

export const BlogSection = () => {
  const { get } = useI18n();
  const postsRaw = get("blog.posts");
  const posts = Array.isArray(postsRaw) ? postsRaw : [];
  if (posts.length === 0) return null;

  return (
    <MvSection>
      <SectionTitle
        title={<T k="blog.title" />}
        subtitle={<T k="blog.subtitle" />}
        centerText
      />
      <SimpleGrid cols={{ base: 1, md: 1, lg: 2 }}>
        <Each
          of={posts}
          render={({ title }, idx) => {
            const slug = slugify(title);
            return (
              <Link key={idx} to={`/blog/${slug}`} style={{ textDecoration: 'none' }}>
                <CardBento>
                  <Image radius="md" mb="md" src="/cleanmax.webp" alt={title} />
                  <Title order={4} size="h3">{title}</Title>
                </CardBento>
              </Link>
            );
          }}
        />
      </SimpleGrid>
    </MvSection>
  );
};
