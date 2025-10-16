import { Center } from '@mantine/core'
import { Footer, MvHelmet, MvSection, Navbar, TextDisplay } from '../components'
import { ServicesSection } from '../sections'
import { useI18n } from '../i18n/useI18n.js';

export const ServicesPage = () => {
	const { t } = useI18n();     
	const pageTitle = t('navbar.services');

	return (
		<>
			<MvHelmet page={pageTitle} slug="services" />
			<Navbar />
			<MvSection>
				<Center>
					<TextDisplay gradient={pageTitle} />
				</Center>
			</MvSection>
			<ServicesSection />
			<Footer />
		</>
	)
}
