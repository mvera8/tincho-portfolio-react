import { Container, Group } from '@mantine/core'
import { TextDimmed } from './TextDimmed';
import { SocialMedia } from './SocialMedia';
import { isMobile } from 'react-device-detect';

export const Footer = () => {
	return (
		<footer>
			<Container size="lg" pt="lg" pb="xl">
				<Group justify={isMobile ? 'center' : 'space-between'}>
					<TextDimmed text='© 2025 MARTINVERA. All rights reserved.' />
					<Group>
						<SocialMedia type="icon" />
					</Group>
				</Group>
			</Container>
		</footer>
	)
}
