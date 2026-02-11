import { Container, useMantineTheme } from '@mantine/core';
import { Footer, MvHelmet, Navbar } from '../components';
import { AboutSection, BlogSection, HeroSection, PortfolioSection, ResumeSection, ServicesSection, SkillsSection, StartSection } from '../sections';
import { useI18n } from '../i18n/useI18n.js';
import { isMobile } from 'react-device-detect';

export const HomePage = () => {
	const { t } = useI18n();     
	const pageTitle = t('navbar.home');
	const theme = useMantineTheme();

	return (
		<>
			<MvHelmet page={pageTitle} slug="" />
			<Navbar />
			<Container size={1824}>
				<div
					style={{
						background: `radial-gradient(125% 95% at 50% 10%, transparent 45%, ${theme.colors.red[5]} 100%)`,
						borderBottomRightRadius: `${isMobile ? '20px' : '50px'}`,
						borderBottomLeftRadius: `${isMobile ? '20px' : '50px'}`,
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
					backgroundImage: 'radial-gradient(circle 400px at 0 100%, rgba(239,68,68,0.4), transparent)',
				}}
			>
				<StartSection />
			</div>
			<Footer />
		</>
	)
}
