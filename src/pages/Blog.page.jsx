import { SimpleGrid, Stack } from '@mantine/core';
import { ArticleCardImage, Footer, MvSection, Navbar } from '../components';
import { ContactSection } from '../sections';

export const BlogPage = () => {
	return (
		<>
			<Navbar />
			<MvSection>
				<SimpleGrid cols={{ base: 1, xs: 2 }}>
					<ArticleCardImage />
					<Stack>
						<ArticleCardImage />
						<ArticleCardImage />
					</Stack>
				</SimpleGrid>
			</MvSection>

			<ContactSection />
			<Footer />
		</>
	)
}
