import { Center } from '@mantine/core';
import { Footer, MvSection, Navbar, TextDisplay } from '../components';
import { ContactSection } from '../sections';

export const ContactPage = () => {
	return (
		<>
			<Navbar />
			<MvSection>
				<Center>
					<TextDisplay gradient="Contacto." />
				</Center>
			</MvSection>
			<ContactSection />
			<Footer />
		</>
	)
}
