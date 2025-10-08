import { Container, useMantineTheme } from '@mantine/core';
import { Footer, Navbar } from '../components';
import { AboutSection, BlogSection, HeroSection, PortfolioSection, ResumeSection, ServicesSection, SkillsSection } from '../sections';

export const HomePage = () => {
	const theme = useMantineTheme();

	return (
		<>
			<Navbar />
			<Container size={1824}>
				<div
					style={{
						background: `radial-gradient(125% 95% at 50% 10%, transparent 45%, ${theme.colors.red[5]} 100%)`,
						borderBottomRightRadius: 50,
						borderBottomLeftRadius: 50,
						overflow: 'hidden',
					}}>
					<HeroSection />
				</div>
			</Container>
			<AboutSection />
			<ResumeSection />
			<ServicesSection />
			<SkillsSection />
			<PortfolioSection />
			<div
				style={{
					backgroundImage: `radial-gradient(circle 400px at 0 100%, rgba(239,68,68,0.4), transparent)`,
				}}
			>
				<BlogSection />
			</div>
			<Footer />
		</>
	)
}
