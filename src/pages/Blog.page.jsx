import { Box, Container, SimpleGrid, Stack } from '@mantine/core';
import { ArticleCardImage, Footer, Navbar } from '../components';
import { ContactSection } from '../sections';

export const BlogPage = () => {
	return (
		<>
			<Navbar />
			<Box component="section" py="xl">
				<Container size="lg" pt="xl">

					<SimpleGrid cols={{ base: 1, xs: 2 }}>
						<ArticleCardImage />
						<Stack>
							<ArticleCardImage />
							<ArticleCardImage />
						</Stack>
					</SimpleGrid>
				</Container>
			</Box>	

			<ContactSection />
			<Footer />
		</>
	)
}
