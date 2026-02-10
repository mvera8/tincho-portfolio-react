import { Avatar, Box, Button, Container, Divider, Grid, Group, List, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import {
	IconPhone,
	IconBriefcase2,
	IconUser,
	IconMapPin,
	IconMail,
	IconCode,
	IconStarFilled
} from '@tabler/icons-react';

export const CVPDFPage = () => {
	const renderTitleSection = (title) => {
		return (
			<Title order={2} size="h3" c="red" mb={1} tt="uppercase">
				{title}
			</Title>
		)
	}

	const renderJobTitle = (title, duration) => {
		return (
			<Title order={3} c="dark">{title} <Text span c="dimmed" size="xl" fw={500}>{duration}</Text></Title>
		)
	}

	const renderReferido = (name, phone, position) => {
		return (
			<List spacing={0} mb="md">
				<List.Item
					icon={
						<ThemeIcon color="red" size={24} radius="xl">
							<IconUser size={16} />
						</ThemeIcon>
					}
				>
					<Title order={4} c="dark" mb={1}>{name} <Text span c="dimmed" size="md" fw={500}>{phone}</Text></Title>
				</List.Item>
				<Text span c="dark" size="md" fw={500}>{position}</Text>
			</List>
		)
	}

	return (
		<>
			<Container fluid px={0}>
				<Grid>
					<Grid.Col span={2}>
						<Avatar
							src="cv.jpeg"
							alt="Imagen"
							size={120}
							mt={30}
						/>
					</Grid.Col>
					<Grid.Col span={10}>
						<Group justify="space-between">
							<Title order={1} c="red">Martín Vera <Text span c="dark" size="xl" fw={700}>Frontend / Web Developer</Text></Title>

							<Button.Group mb="xl">
								<Button
									variant="default"
									px="md"
								>
									<b><u>Español</u></b>
								</Button>
								<Button
									variant="default"
									px="md"
								>Inglés</Button>
							</Button.Group>
						</Group>
						<Box mb="md">
							<Grid>
								<Grid.Col span={6}>
									<List spacing="xs">
										<List.Item
											icon={
												<ThemeIcon color="red" size={24} radius="xl">
													<IconMapPin size={16} />
												</ThemeIcon>
											}
										>Montevideo, Uruguay</List.Item>
										<List.Item
											icon={
												<ThemeIcon color="red" size={24} radius="xl">
													<IconPhone size={16} />
												</ThemeIcon>
											}
										>098 771 201</List.Item>
										<List.Item
											icon={
												<ThemeIcon color="red" size={24} radius="xl">
													<IconMail size={16} />
												</ThemeIcon>
											}
										>tinchovera8@hotmail.com</List.Item>
									</List>
								</Grid.Col>
								<Grid.Col span={6}>
									<List spacing="xs">
										<List.Item
											icon={
												<ThemeIcon color="yellow" size={24} radius="xl">
													<IconStarFilled size={16} />
												</ThemeIcon>
											}
										>martinvera.com.uy</List.Item>
										<List.Item
											icon={
												<ThemeIcon color="red" size={24} radius="xl">
													<IconCode size={16} />
												</ThemeIcon>
											}
										>github.com/mvera8</List.Item>
										<List.Item
											icon={
												<ThemeIcon color="red" size={24} radius="xl">
													<IconBriefcase2 size={16} />
												</ThemeIcon>
											}
										>linkedin.com/in/tincho8</List.Item>
									</List>
								</Grid.Col>
							</Grid>
						</Box>
					</Grid.Col>
				</Grid>
				<Divider mb="md" />
				<Box mb="md">
					{renderTitleSection('Perfil Profesional')}
					<Text>
						Web Developer con más de 10 años de experiencia en desarrollo frontend y <b>WordPress</b>. Especializado en la construcción de sitios de alto tráfico y web apps modernas con <b>React</b> y <b>Next.js</b>. Experiencia liderando proyectos, creando dashboards internos, automatizando flujos de trabajo y mejorando performance, confiabilidad y mantenibilidad. Fuerte enfoque en buenas prácticas, testing end-to-end y CI/CD.
					</Text>
				</Box>
				<Divider mb="md" />
				<Box mb="md">
					{renderTitleSection('Habilidades Técnicas')}
					<Text>
						<Text span fw={700}>Frontend: </Text>
						JavaScript (ES6+), React, Next.js, HTML5, CSS3, Bootstrap
					</Text>
					<Text>
						<Text span fw={700}>Backend / CMS: </Text>
						WordPress, PHP, REST APIs
					</Text>
					<Text>
						<Text span fw={700}>Testing: </Text>
						Cypress (E2E)
					</Text>
					<Text>
						<Text span fw={700}>DevOps / Automation: </Text>
						Docker, GitHub Actions, Jenkins, WP-CLI
					</Text>
					<Text>
						<Text span fw={700}>Cloud: </Text>
						AWS (S3, Lambda)
					</Text>
					<Text>
						<Text span fw={700}>Tools: </Text>
						GitHub, Figma, Photoshop, Illustrator
					</Text>
				</Box>
				<Divider mb="md" />
				<Box mb="md">
					{renderTitleSection('Experiencia Laboral')}
					<Box mb="xs">
						{renderJobTitle(
							'WordPress Tech Lead',
							'OnPoint Global | Aug 2019 – Feb 2026'
						)}
						<Stack
							align="flex-start"
							justify="flex-start"
							gap={1}
						>
							<Text size="md">Lideré el desarrollo y mantenimiento de múltiples sitios WordPress de alto tráfico.</Text>
							<Text size="md">Diseñé y desarrollé dashboards internos en React para visualización de datos de los sitios.</Text>
							<Text size="md">Implementé automatizaciones usando WP-CLI, Jenkins y GitHub Actions.</Text>
							<Text size="md">Desarrollé herramientas internas para reportes, monitoreo y operaciones de contenido.</Text>
							<Text size="md">Implementé tests end-to-end con Cypress para validar flujos críticos.</Text>
						</Stack>
					</Box>
					<Box mb="xs">
						{renderJobTitle(
							'Fullstack Developer',
							'Muu Vainilla | Jul 2015 – Jul 2019'
						)}
						<Stack
							align="flex-start"
							justify="flex-start"
							gap={1}
						>
							<Text size="md">Desarrollo de sitios web en WordPress y aplicaciones a medida.</Text>
							<Text size="md">Integración de frontend con servicios backend y APIs REST.</Text>
							<Text size="md">Colaboración con equipos de diseño y backend.</Text>
						</Stack>
					</Box>
					<Box mb="xs">
						{renderJobTitle(
							'Frontend Developer',
							'Meeting Inc | Jun 2014 – Jun 2015'
						)}
						<Stack
							align="flex-start"
							justify="flex-start"
							gap={1}
						>
							<Text size="md">Desarrollo de interfaces web enfocadas en usabilidad y diseño responsive.</Text>
							<Text size="md">Implementación de interfaces en HTML, CSS y JavaScript, responsivas y optimizadas para SEO y performance.</Text>
						</Stack>
					</Box>
					<Box mb="xs">
						{renderJobTitle(
							'Frontend Developer',
							'Mambo Publicidad | Apr 2012 – Apr 2014'
						)}
						<Stack
							align="flex-start"
							justify="flex-start"
							gap={1}
						>
							<Text size="md">Maquetación y desarrollo frontend para sitios institucionales y campañas digitales.</Text>
							<Text size="md">Creación de landings interactivas para promociones y obtención de leads.</Text>
						</Stack>
					</Box>
				</Box>

				<Grid>
					<Grid.Col span={6}>
						<Stack
							mb="md"
							align="flex-start"
							justify="flex-start"
							gap={5}
						>
							{renderTitleSection('Educación')}
							<Text>
								<Text span fw={700}>Técnico en Diseño Web</Text> - Universidad ORT Uruguay
							</Text>
							<Text>
								<Text span fw={700}>Diseñador Gráfico</Text> - Universidad ORT Uruguay
							</Text>
							<Text>
								<Text span fw={700}>Secundaria completa</Text> - Colegio Santa Elena MVD
							</Text>
							<Text>
								<Text span fw={700}>Primaria completa</Text> - Escuela Cooperativa VICMAN
							</Text>
						</Stack>
					</Grid.Col>
					<Grid.Col span={6}>
						<Box mb="md">
							{renderTitleSection('Referencias')}
							{renderReferido('Andres Pache', '091 056 735', 'Engineering Leader en OnPoint Global')}
							{renderReferido('Pedro Martinez', '099 122 073', 'Chief Executive Officer en Muu Vainilla')}
						</Box>
					</Grid.Col>
				</Grid>
			</Container>
		</>
	)
}
