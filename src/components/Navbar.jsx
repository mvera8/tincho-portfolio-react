import {
  Button,
  useMantineColorScheme,
  useComputedColorScheme,
  Container,
  Grid,
  Group,
  Menu,
  Burger,
} from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { Each } from './Each';
import { useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { useI18n } from '../i18n/useI18n.js';
import T from "../i18n/T.jsx";

const items = [
  { path: '/', name: <T k="navbar.home" /> },
  { path: '/blog', name: 'Blog' },
	{ path: '#contact', name: <T k="navbar.contact" /> },
  // { path: '/post', name: 'Post' },
  // { path: '/portfolio-post', name: 'PortfolioPost' },
  // { path: '/service-post', name: 'ServicePost' },
  // { path: '/test', name: 'Test' },
];

export const Navbar = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const location = useLocation();
  const { lang, setLang } = useI18n();

  return (
    <header>
      <Container size="xl" py="sm">
        <Grid align="center">
          <Grid.Col span={{ base: 5, lg: 3 }} order={{ base: 1, lg: 1 }}>
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
              {/* Idiomas */}
              <Button.Group>
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

							{/* Toggle tema */}
              <Button
                onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
                variant="transparent"
                color="gray"
                px="xs"
                aria-label="Toggle color scheme"
              >
                {computedColorScheme === 'light' ? <IconMoon size={20} /> : <IconSun size={20} />}
              </Button>

							{/* mobile menu */}
              <Menu shadow="md" width={220}>
                <Menu.Target>
									<Burger aria-label="Abrir menú" hiddenFrom="lg" />
                </Menu.Target>
                <Menu.Dropdown>
                  <Each
                    of={items}
                    render={(item, index) =>
                      item.name && (
                        <Menu.Item
                          key={index}
                          component="a"
                          href={item.path}
                        >
                          {item.name}
                        </Menu.Item>
                      )
                    }
                  />
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </header>
  );
};
