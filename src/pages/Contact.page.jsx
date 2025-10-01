import { Footer, MvSection, Navbar, TextDisplay } from '../components';
import { ContactSection } from '../sections';

export const ContactPage = () => {
	return (
		<>
			<Navbar />
			<MvSection>
				<TextDisplay text="Contacto" />
			</MvSection>
			<ContactSection />
			<Footer />
		</>
	)
}
