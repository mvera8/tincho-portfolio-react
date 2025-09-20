import { Container, Grid, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { ArticleCardImage, Navbar } from '../components';

export const BlogPage = () => {
	return (
		<>
			<Navbar />
			<Container my="md">
				<Grid mb="md" align="center">
					<Grid.Col span={8}>
						<Title order={1} mb="xs">Read our Blog</Title>
						<Text c="dimmed" size="sm" mb={0}>Unleashing Comprehensive Digital Marketing Services Tailored.</Text>
					</Grid.Col>
					<Grid.Col span={4} ta="end">
						a
					</Grid.Col>
				</Grid>

				<SimpleGrid cols={{ base: 1, xs: 2 }}>
					<ArticleCardImage />
					<Stack>
						<ArticleCardImage />
						<ArticleCardImage />
					</Stack>
				</SimpleGrid>
			</Container>
		</>
	)
}
