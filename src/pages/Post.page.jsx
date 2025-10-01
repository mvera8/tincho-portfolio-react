import { Image, Text, Title } from '@mantine/core';
import { Footer, MvSection, Navbar } from '../components';

export const PostPage = () => {
	return (
		<>
			<Navbar />
			<MvSection size="sm">

				<Title order={1} my="xl">Text Expander Snippet Extension</Title>
				<Text c="dimmed" size="xl"mb="lg">Create, manage, and use custom snippets for faster typing, email responses, and coding.</Text>
				<Image
					radius="md"
					mb="lg"
					src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
				/>

				<Title order={2} mb="lg">Text Expander Snippet Extension</Title>
				<Text mb="lg">Store, search, and insert frequently used text snippets. Write faster by using text snippets to store and insert commonly used text. Expand them automatically with a keyword.</Text>

				<Title order={3} mb="lg">Text Expander Snippet Extension</Title>
				<Text mb="lg">Store, search, and insert frequently used text snippets. Write faster by using text snippets to store and insert commonly used text. Expand them automatically with a keyword.</Text>


			</MvSection>
			<Footer />
		</>
	)
}
