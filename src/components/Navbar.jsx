import { Button, Group, useMantineColorScheme, useComputedColorScheme, Container } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { Each } from './Each';
import { useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import T from "../i18n/T.jsx";
import { useI18n } from '../i18n/useI18n.js';

const items = [
	{path: '/', name: <T k="navbar.home" />},
	{path: '/blog', name: 'Blog'},
	// {path: '/post', name: 'Post'},
	// {path: '/portfolio-post', name: 'PortfolioPost'},
	// {path: '/service-post', name: 'ServicePost'},
	// {path: '/test', name: 'Test'},
];

export const Navbar = () => {
	const { setColorScheme } = useMantineColorScheme();
	const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
	const location = useLocation();

	// lenguage
	const { lang, setLang } = useI18n();

	return (
		<>
			<header>
				<Container size="xl" py="sm">
					<Group justify="space-between" h="100%">
						<Logo type="gradient" />

						<Button.Group>
							<Each of={items} render={(item, index) => (
								item.name && (
									<Button
										key={index}
										component="a"
										href={item.path}
										color={location.pathname === item.path ? 'red' : 'gray'}
										variant="subtle">
										{item.name}
									</Button>
								)
							)} />

							<Button.Group ms="sm">
								<Button
									onClick={() => setLang("es")}
									aria-pressed={lang === "es"}
									title="Español"
									variant="default">ES</Button>
								<Button
									onClick={() => setLang("en")}
									aria-pressed={lang === "en"}
									title="English"
									variant="default">EN</Button>
							</Button.Group>

							<Button
								onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
								variant="transparent"
								color="gray"
								ms="sm"
								pl="xs"
								pr="xs">
								{computedColorScheme === 'light' ? <IconMoon size={20} /> : <IconSun size={20} />}
							</Button>

						</Button.Group>
					</Group>
				</Container>
			</header>
		</>
	);
};