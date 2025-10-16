import { Center } from '@mantine/core';
import { Footer, MvHelmet, MvSection, Navbar, TextDisplay } from '../components';
import { BlogSection } from '../sections';

export const BlogPage = () => {
	return (
		<>
			<MvHelmet page="Blog" slug="blog" />
			<Navbar />
			<MvSection>
				<Center>
					<TextDisplay gradient="Blog" />
				</Center>
			</MvSection>
			<BlogSection />
			<Footer />
		</>
	)
}
