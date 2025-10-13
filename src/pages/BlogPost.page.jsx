// pages/PostPage.jsx
import { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Image, Text, Title } from '@mantine/core';
import { Footer, MvSection, Navbar } from '../components';
import { useI18n } from '../i18n/useI18n.js';
import { slugify } from '../helpers/slugify';

export const BlogPostPage = () => {
  const { slug } = useParams();
  const { get } = useI18n();

  const postsRaw = get("blog.posts");
  const posts = Array.isArray(postsRaw) ? postsRaw : [];

  // Busca el post por slug
  const post = useMemo(() => {
    const bySlug = new Map(posts.map((p) => [slugify(p.title), p]));
    return bySlug.get(slug);
  }, [posts, slug]);

  if (!post) {
    // 404 elegante: vuelve al listado o a una página de no encontrado
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Navbar />
      <MvSection size="sm">
        <Title order={1} my="xl">{post.title}</Title>
        {post.text && (
          <Text c="dimmed" size="xl" mb="lg">{post.text}</Text>
        )}

        <Image
          radius="md"
          mb="lg"
          src={post.image || "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"}
          alt={post.title}
        />

        {/* Si tienes campos como post.subtitle / post.content, renderízalos */}
        {post.subtitle && (
          <>
            <Title order={2} mb="lg">{post.subtitle}</Title>
            {post.content && <Text mb="lg">{post.content}</Text>}
          </>
        )}
      </MvSection>
      <Footer />
    </>
  );
};
