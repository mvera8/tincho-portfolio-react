import { Container, Group } from '@mantine/core'
import { TextDimmed } from './TextDimmed';
import { SocialMedia } from './SocialMedia';


export const Footer = () => {
	return (
		<footer>
      <Container size="lg" pt="xl" pb="md">
				<Group justify="space-between">
					<TextDimmed text='© 2025 MARTINVERA. All rights reserved.' />
					<Group>
						<SocialMedia type="icon" />
					</Group>
				</Group>
      </Container>
    </footer>
	)
}
