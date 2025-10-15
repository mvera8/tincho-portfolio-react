import { Center } from '@mantine/core'
import { Footer, MvSection, Navbar, TextDisplay } from '../components'
import { ServicesSection } from '../sections'
import T from '../i18n/T.jsx';

export const ServicesPage = () => {
	return (
		<>
			<Navbar />
			<MvSection>
				<Center>
					<TextDisplay gradient={<T k="navbar.services" />} />
				</Center>
			</MvSection>
			<ServicesSection />
			<Footer />
		</>
	)
}
