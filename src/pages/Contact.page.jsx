import { Footer, MvSection, Navbar, TextDisplay } from '../components';
import { ContactSection } from '../sections';

export const ContactPage = () => {
	return (
		<>
			<Navbar />
			<MvSection>
				<TextDisplay gradient="Contacto." />
			</MvSection>
			<ContactSection />
			<Footer />
		</>
	)
}
