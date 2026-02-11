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
import { useState } from 'react';

export const CVPDFSection = () => {
	const [eng, setEng] = useState(false);

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

	const renderEducationTitle = (title, duration) => {
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
			<Container fluid bg="white">
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
									onClick={() => setEng(false)}
									style={{ textDecoration: !eng ? 'underline' : undefined, fontWeight: !eng ? 700 : undefined }}
								>
									Español
								</Button>
								<Button
									variant="default"
									px="md"
									onClick={() => setEng(true)}
									style={{ textDecoration: eng ? 'underline' : undefined, fontWeight: eng ? 700 : undefined }}
								>English</Button>
							</Button.Group>
						</Group>
						<Box mb="md">
							<Grid>
								<Grid.Col span={6}>
									<List spacing="xs" c="dark">
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
									<List spacing="xs" c="dark">
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
					{eng ? (
						<>
							{renderTitleSection('Professional Profile')}
							<Text c="dark">
								Experienced Frontend and Web Developer with over 10 years in the industry. Skilled in building and maintaining high-traffic WordPress sites, developing React dashboards, and implementing automation solutions using Docker, Jenkins, and GitHub Actions. Strong background in collaborating with cross-functional teams to deliver user-friendly web applications.
							</Text>
						</>
					) : (
						<>
							{renderTitleSection('Perfil Profesional')}
							<Text c="dark">
							Desarrollador Frontend y Web con más de 10 años de experiencia en la industria. Hábil en la construcción y mantenimiento de sitios WordPress de alto tráfico, desarrollo de dashboards en React e implementación de soluciones de automatización utilizando Docker, Jenkins y GitHub Actions. Sólida experiencia en colaboración con equipos multifuncionales para entregar aplicaciones web fáciles de usar.
							</Text>
						</>
					)}					
				</Box>
				<Divider mb="md" />
				<Box mb="md">
					{eng ? (
						renderTitleSection('Technical Skills')
					) : (
						renderTitleSection('Habilidades Técnicas')
					)}	
					<Text c="dark">
						<Text span fw={700}>Frontend: </Text>
						React, Next.js, JavaScript (ES6+), HTML5, CSS3, Bootstrap
					</Text>
					<Text c="dark">
						<Text span fw={700}>Backend & APIs: </Text>
						WordPress (custom themes/plugins), PHP, REST APIs
					</Text>
					<Text c="dark">
						<Text span fw={700}>Testing & Quality: </Text>
						Cypress (E2E), CI/CD pipelines
					</Text>
					<Text c="dark">
						<Text span fw={700}>DevOps / Automation: </Text>
						Docker, GitHub Actions, Jenkins, WP-CLI
					</Text>
					<Text c="dark">
						<Text span fw={700}>Cloud: </Text>
						AWS (S3, Lambda)
					</Text>
					<Text c="dark">
						<Text span fw={700}>Tools & Design: </Text>
						Postman, GitHub, Figma, Photoshop, Illustrator
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
							{eng ? (
								<>
									<Text size="md" c="dark">Led the development and maintenance of multiple high-traffic WordPress sites.</Text>
									<Text size="md" c="dark">Designed and built internal React dashboards for site data visualization.</Text>
									<Text size="md" c="dark">Implemented automation workflows using WP-CLI, Jenkins, and GitHub Actions.</Text>
									<Text size="md" c="dark">Built internal tools for reporting, monitoring, and content operations.</Text>
									<Text size="md" c="dark">Introduced end-to-end testing with Cypress to validate critical user flows.</Text>
								</>
							) : (
								<>
									<Text size="md" c="dark">Lideré el desarrollo y mantenimiento de múltiples sitios WordPress de alto tráfico.</Text>
									<Text size="md" c="dark">Diseñé y desarrollé dashboards internos en React para visualización de datos de los sitios.</Text>
									<Text size="md" c="dark">Implementé automatizaciones usando WP-CLI, Jenkins y GitHub Actions.</Text>
									<Text size="md" c="dark">Desarrollé herramientas internas para reportes, monitoreo y operaciones de contenido.</Text>
									<Text size="md" c="dark">Implementé tests end-to-end con Cypress para validar flujos críticos.</Text>
								</>
							)}
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
							{eng ? (
								<>
									<Text size="md" c="dark">Development of WordPress websites and custom applications.</Text>
									<Text size="md" c="dark">Frontend integration with backend services and REST APIs.</Text>
									<Text size="md" c="dark">Collaboration with design and backend teams.</Text>
								</>
							) : (
								<>
									<Text size="md" c="dark">Desarrollo de sitios web en WordPress y aplicaciones a medida.</Text>
									<Text size="md" c="dark">Integración de frontend con servicios backend y APIs REST.</Text>
									<Text size="md" c="dark">Colaboración con equipos de diseño y backend.</Text>
								</>
							)}	
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
							{eng ? (
								<>
									<Text size="md" c="dark">Development of web interfaces focused on usability and responsive design.</Text>
									<Text size="md" c="dark">Implementation of interfaces in HTML, CSS, and JavaScript, responsive and optimized for SEO and performance.</Text>
								</>
							) : (
								<>
									<Text size="md" c="dark">Desarrollo de interfaces web enfocadas en usabilidad y diseño responsive.</Text>
									<Text size="md" c="dark">Implementación de interfaces en HTML, CSS y JavaScript, responsivas y optimizadas para SEO y performance.</Text>
								</>
							)}	
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
							{eng ? (
								<>
									<Text size="md" c="dark">Layout and frontend development for institutional websites and digital campaigns.</Text>
									<Text size="md" c="dark">Creation of interactive landing pages for promotions and lead generation.</Text>
								</>
							) : (
								<>
									<Text size="md" c="dark">Maquetación y desarrollo frontend para sitios institucionales y campañas digitales.</Text>
									<Text size="md" c="dark">Creación de landings interactivas para promociones y obtención de leads.</Text>
								</>
							)}	
						</Stack>
					</Box>
				</Box>

				<Grid>
					<Grid.Col span={7}>
						<Stack
							mb="md"
							align="flex-start"
							justify="flex-start"
							gap={5}
						>
							{eng ? (
								<>
									{renderTitleSection('Education')}
									{renderEducationTitle('Web Design Technician', 'ORT University | 2017')}
									{renderEducationTitle('Graphic Designer', 'ORT University | 2012 - 2013')}
								</>
							) : (
								<>
									{renderTitleSection('Educación')}
									{renderEducationTitle('Técnico en Diseño Web', 'Universidad ORT | 2017')}
									{renderEducationTitle('Diseñador Gráfico', 'Universidad ORT | 2012 - 2013')}
								</>
							)}		
						</Stack>
					</Grid.Col>
					<Grid.Col span={5}>
						<Box mb="md">
							{eng ? (
								renderTitleSection('References')
							) : (
								renderTitleSection('Referencias')
							)}	
							{renderReferido('Andres Pache', '091 056 735', 'Engineering Leader')}
							{renderReferido('Pedro Martinez', '099 122 073', 'Chief Executive Officer - Muu Vainilla')}
						</Box>
					</Grid.Col>
				</Grid>
			</Container>
		</>
	)
}
