import { Center } from '@mantine/core';
import { Footer, MvHelmet, MvSection, Navbar, TextDisplay } from '../components';
import { PortfolioSection } from '../sections';

export const PortfolioPage = () => {
	return (
		<>
			<MvHelmet page="Portfolio" slug="portfolio" />
			<Navbar />
			<MvSection>
				<Center>
					<TextDisplay gradient="Portfolio" />
				</Center>
			</MvSection>
			<PortfolioSection />
			<Footer />
		</>
	);
};
