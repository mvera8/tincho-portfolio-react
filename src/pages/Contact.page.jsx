import { Center } from '@mantine/core';
import { Footer, MvSection, Navbar, TextDisplay } from '../components';
import { ContactSection, FaqsSection } from '../sections';
import T from "../i18n/T.jsx";

export const ContactPage = () => {
	return (
		<>
			<Navbar />
			<MvSection>
				<Center>
					<TextDisplay gradient={<T k="navbar.contact" />} />
				</Center>
			</MvSection>
			<ContactSection />
			<FaqsSection />
			<Footer />
		</>
	)
}
