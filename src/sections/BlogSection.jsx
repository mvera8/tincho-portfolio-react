import { Box, Card, Container, Image, SimpleGrid, Title } from '@mantine/core';
import { Each, SectionTitle, TextDimmed } from '../components';
import { useI18n } from '../i18n/useI18n.js';
import T from "../i18n/T.jsx";

export const BlogSection = () => {
	const { get } = useI18n();
	const postsRaw = get("blog.posts");
	const posts = Array.isArray(postsRaw) ? postsRaw : [];
	if (posts.length === 0) return null;

	return (
		<Box
			component="section"
			py="xl"
			style={{
				backgroundImage: `radial-gradient(circle 400px at 0 100%, rgba(239,68,68,0.4), transparent)`,
			}}
		>
			<Container size="lg" py="xl" mb="xl">
				<SectionTitle
					title={<T k="blog.title" />}
					subtitle={<T k="blog.subtitle" />}
					centerText
				/>
				<SimpleGrid cols={2}>
					<Each
						of={posts}
						render={({ title, text }, idx) => (
							<Card
								key={idx}
								radius="md"
								component="a"
								href="/post"
								withBorder>
								<SimpleGrid cols={2}>
									<Image
										src="/public/cleanmax.webp"
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
			</Container>
		</Box>	
	)
}
