import { Center } from '@mantine/core';
import { Footer, MvSection, Navbar, TextDisplay } from '../components';
import { BlogSection } from '../sections';

export const BlogPage = () => {
	return (
		<>
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
