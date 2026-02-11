import { Footer, MvHelmet, MvSection, Navbar } from '../components';
import { CVPDFSection } from '../sections/CVPDFSection';

export const CVPage = () => {
	return (
		<>
			<MvHelmet page="CV" slug="cv" />
			<Navbar print={true} />
			<MvSection size='xl'>
				<CVPDFSection />
			</MvSection>
			<Footer />
		</>
	)
}
