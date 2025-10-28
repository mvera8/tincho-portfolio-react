import { ActionIcon, Group, Image, SimpleGrid, Title } from '@mantine/core';
import { CardLink, Each, MvSection, SectionTitle } from '../components';
import { useI18n } from '../i18n/useI18n.js';
import { isMobile } from 'react-device-detect';
import { IconArrowUpRight } from '@tabler/icons-react';
import T from '../i18n/T.jsx';

export const BlogSection = () => {
	const { get } = useI18n();
	const postsRaw = get('blog.posts');
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
					render={({ title, image, slug }, idx) => {
						return (
							<CardLink key={idx} link={`/blog/${slug}`}>
								<Group justify="flex-end" wrap="nowrap" gap={isMobile ? 'xs' : 'xl'}>
									<Title p="xs" order={3} c="gray" mb="md">{title}</Title>
									<ActionIcon
										variant="light"
										color="red"
										radius="xl"
										size="xl"
										mb="md"
										component="button"
										href={`/blog/${slug}`}
										aria-label={title}>
										<IconArrowUpRight size={22} />
									</ActionIcon>
								</Group>												
								<Image
									radius="md"
									loading="lazy"
									src={`/${image}.webp`}
									alt={title} />
							</CardLink>
						);
					}}
				/>
			</SimpleGrid>
		</MvSection>
	);
};
