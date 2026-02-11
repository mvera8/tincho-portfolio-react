import {
	Button,
	Container,
	Grid,
	Group,
	Burger,
	Drawer,
	Divider,
	ActionIcon,
} from '@mantine/core';
import { Each, Logo, ThemeToggleOrb } from '../components';
import { useLocation } from 'react-router-dom';
import { useI18n } from '../i18n/useI18n.js';
import T from '../i18n/T.jsx';
import { useDisclosure } from '@mantine/hooks';
import { IconPrinter } from '@tabler/icons-react';
import PropTypes from 'prop-types';

const items = [
	{ path: '/', name: <T k="navbar.home" /> },
	{ path: '/services', name: <T k="navbar.services" /> },
	{ path: '/portfolio', name: 'Portfolio' },
	// { path: '/blog', name: 'Blog' },
	{ path: '/contact', name: <T k="navbar.contact" /> },
];

export const Navbar = ({ print = false }) => {
	const [opened, { open, close }] = useDisclosure(false);
	const location = useLocation();
	const { lang, setLang } = useI18n();

	return (
		<header className='no-print'>
			<Container size="xl">
				<Grid align="center">
					<Grid.Col span={{ base: 5, lg: 3 }} order={{ base: 1, lg: 1 }} ta="left">
						<Logo type="gradient" />
					</Grid.Col>

					<Grid.Col span={{ base: 12, lg: 7 }} order={{ base: 3, lg: 2 }}>
						<Group justify="center" wrap="nowrap">
							{/* desktop menu */}
							<Button.Group visibleFrom="lg">
								<Each
									of={items}
									render={(item, index) =>
										item.name && (
											<Button
												key={index}
												component="a"
												href={item.path}
												color={location.pathname === item.path ? 'red' : 'gray'}
												variant="subtle"
											>
												{item.name}
											</Button>
										)
									}
								/>
							</Button.Group>
						</Group>
					</Grid.Col>

					<Grid.Col span={{ base: 7, lg: 2 }} order={{ base: 2, lg: 3 }}>
						<Group justify="flex-end" gap="xs">
							{print
								? <ActionIcon
									variant="filled"
									onClick={() => window.print()}
									aria-label="Print"
									size="lg"
								>
									<IconPrinter style={{ width: '70%', height: '70%' }} stroke={1.5} />
								</ActionIcon>
								: <Button.Group>
									<Button
										onClick={() => setLang('es')}
										aria-pressed={lang === 'es'}
										title="Español"
										variant="default"
										px="md"
									>
                  ES
									</Button>
									<Button
										onClick={() => setLang('en')}
										aria-pressed={lang === 'en'}
										title="English"
										variant="default"
										px="md"
									>
                  EN
									</Button>
								</Button.Group>
							}

							{/* Toggle tema */}
							<ThemeToggleOrb />

							{/* mobile menu */}
							<Burger onClick={open} aria-label="Toggle navigation" hiddenFrom="lg" />
						</Group>
					</Grid.Col>
				</Grid>
			</Container>

			<Drawer opened={opened} onClose={close} size="xs">
				<Logo type="gradient" />
				<Divider my="md" />
				<Each
					of={items}
					render={(item, index) =>
						item.name && (
							<Button
								key={index}
								size="md"
								component="a"
								href={item.path}
								color={location.pathname === item.path ? 'red' : 'gray'}
								variant="light"
								mb="xs"
								fullWidth
							>
								{item.name}
							</Button>
						)
					}
				/>
			</Drawer>


		</header>
	);
};

Navbar.propTypes = {
	print: PropTypes.bool,
};