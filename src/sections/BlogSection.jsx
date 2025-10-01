import { Card, Image, SimpleGrid, Title } from '@mantine/core';
import { Each, MvSection, SectionTitle, TextDimmed } from '../components';
import { useI18n } from '../i18n/useI18n.js';
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
					render={({ title, text }, idx) => (
						<Card
							key={idx}
							radius="md"
							component="a"
							href="/post"
							withBorder>
							<SimpleGrid cols={{ base: 1, md: 1, lg: 2 }}>
								<Image
									src="/cleanmax.webp"
									alt='Cleanmax'
								/>
								<div>
									<Title order={4} c="gray">{title}</Title>
									<TextDimmed text={text} />
								</div>
							</SimpleGrid>
						</Card>
					)}
				/>
			</SimpleGrid>
		</MvSection>
	)
}
