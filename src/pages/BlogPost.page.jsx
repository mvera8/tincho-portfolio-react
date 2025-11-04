import { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Image, Text, Title } from '@mantine/core';
import { Footer, MvHelmet, MvSection, Navbar } from '../components';
import { useI18n } from '../i18n/useI18n.js';
import { BlogSection } from '../sections/BlogSection.jsx';

export const BlogPostPage = () => {
	const { slug } = useParams();
	const { get } = useI18n();

	const post = useMemo(() => {
		const list = Array.isArray(get('blog.posts')) ? get('blog.posts') : [];
		return list.find((p) => p.slug === slug);
	}, [get, slug]);

	if (!post) {
		return <Navigate to="/blog" replace />;
	}

	return (
		<>
			<MvHelmet page={post.title} slug={slug} />
			<Navbar />
			<MvSection size="sm">
				<Title order={1} mb="xl">{post.title}</Title>

				{post.text && (
					<Text c="dimmed" size="xl" mb="lg">{post.text}</Text>
				)}

				<Image
					radius="md"
					mb="lg"
					src={`/${post.image}.webp`}
					alt={post.title}
					loading="lazy"
				/>

				{post.content && <Text mb="lg">{post.content}</Text>}
			</MvSection>
			<BlogSection skip={slug} />
			<Footer />
		</>
	);
};
