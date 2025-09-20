import { ActionIcon, Container, Group, SimpleGrid } from '@mantine/core'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import { TextDimmed } from './TextDimmed';

const redes = [
	{ title: 'LinkedIn', link: 'https://www.linkedin.com/in/tincho8/', icon: IconBrandLinkedin },
	{ title: 'Github', link: 'https://github.com/mvera8', icon: IconBrandGithub },
	// { title: 'Email', link: 'mailto:LALA', icon: IconMail },
];

const rows = redes.map((red, index) => (
	<ActionIcon
		key={index}
		size="lg"
		color="gray"
		component="a"
		href={red.link}
		aria-label={red.title}
		target='blank'
		mb="xs"
		variant="subtle">
		<red.icon size={22} stroke={1.5} />
	</ActionIcon>
));

export const Footer = () => {
	return (
		<footer>
      <Container size="lg" pt="xl" pb="md">
				<SimpleGrid cols={2}>
					<TextDimmed text='© 2025 MARTINVERA. All rights reserved.' />
					<Group gap={0} justify="flex-end" wrap="nowrap">
						{rows}
					</Group>
				</SimpleGrid>
      </Container>
    </footer>
	)
}
