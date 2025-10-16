import { Center } from '@mantine/core';
import { Footer, MvHelmet, MvSection, Navbar, TextDisplay } from '../components';
import { ContactSection, FaqsSection } from '../sections';
import { useI18n } from '../i18n/useI18n.js';

export const ContactPage = () => {
	const { t } = useI18n();     
	const pageTitle = t('navbar.contact');

	return (
		<>
			<MvHelmet page={pageTitle} slug="contact" />
			<Navbar />
			<MvSection>
				<Center>
					<TextDisplay gradient={pageTitle} />
				</Center>
			</MvSection>
			<ContactSection />
			<FaqsSection />
			<Footer />
		</>
	)
}
