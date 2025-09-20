import { Box, Card, Container, Image, SimpleGrid, Title } from '@mantine/core';
import { SectionTitle, TextDimmed } from '../components';
import T from "../i18n/T.jsx";

const posts = [
	{ title: 'Tips for Conductin See SUability Studies' },
	{ title: 'Keyboard-Only Suppor Assistive Tecnology' },
];

const rows = posts.map((post, index) => (
	<Card
		key={index}
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
					<Title order={4} c="gray">{post.title}</Title>
					<TextDimmed text="Please click anywhere on this card to claim your reward, this is not a fraud, trust us" />
				</div>
			</SimpleGrid>

	</Card>
));

export const BlogSection = () => {
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
					{rows}
				</SimpleGrid>
			</Container>
		</Box>	
	)
}
