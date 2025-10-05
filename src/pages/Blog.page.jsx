import { Center, SimpleGrid, Stack } from '@mantine/core';
import { ArticleCardImage, Footer, MvSection, Navbar, TextDisplay } from '../components';
import { ContactSection } from '../sections';

export const BlogPage = () => {
	return (
		<>
			<Navbar />
			<MvSection>
				<Center>
					<TextDisplay gradient="Blog" />
				</Center>
			</MvSection>
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
