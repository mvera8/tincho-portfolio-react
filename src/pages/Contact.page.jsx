import { Center } from '@mantine/core';
import { Footer, MvHelmet, MvSection, Navbar, TextDisplay } from '../components';
import { FaqsSection, WebFormSection } from '../sections';
import { useI18n } from '../i18n/useI18n.js';

export const ContactPage = () => {
	const { t, get } = useI18n(); // ← Usa get() para arrays/objetos
	const pageTitle = t('navbar.contact');
	const contactFaqs = get('contact.faqs'); // ← get() devuelve el valor raw

	return (
		<>
			<MvHelmet page={pageTitle} slug="contact" />
			<Navbar />
			<MvSection>
				<Center>
					<TextDisplay gradient={pageTitle} />
				</Center>
			</MvSection>
			<WebFormSection />
			{contactFaqs && Array.isArray(contactFaqs) && (
				<FaqsSection faqs={contactFaqs} />
			)}
			<Footer />
		</>
	)
}