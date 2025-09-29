import { Container, SimpleGrid } from '@mantine/core'
import { TextDimmed } from './TextDimmed';
import { SocialMedia } from './SocialMedia';


export const Footer = () => {
	return (
		<footer>
      <Container size="lg" pt="xl" pb="md">
				<SimpleGrid cols={2}>
					<TextDimmed text='© 2025 MARTINVERA. All rights reserved.' />
					<SocialMedia />
				</SimpleGrid>
      </Container>
    </footer>
	)
}
