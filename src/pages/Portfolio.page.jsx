import { Center } from '@mantine/core'
import { Footer, MvSection, Navbar, TextDisplay } from '../components'
import { PortfolioSection } from '../sections'

export const PortfolioPage = () => {
	return (
		<>
			<Navbar />
			<MvSection>
				<Center>
					<TextDisplay gradient="Portfolio" />
				</Center>
			</MvSection>
			<PortfolioSection />
			<Footer />
		</>
	)
}
