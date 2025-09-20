import { ActionIcon,
	Box,
	Card,
	Container,
	Grid,
	Table, Text, Title } from '@mantine/core'
import { SectionTitle, TextDimmed } from '../components'
import classes from './ResumeSection.module.css';
import { IconArrowUpRight } from '@tabler/icons-react';
import T from "../i18n/T.jsx";

const experience = [
	{
		title: 'OnPoint Global',
		link: 'https://onpointglobal.com/',
		puesto: 'WordPress Tech Lead',
		time: 'ago. 2019 - actualidad'
	},
	{
		title: 'Muu Vainilla',
		link: 'https://www.muuvainilla.com/',
		puesto: 'Front and Back Developer',
		time: 'jul. 2015 - jul. 2019'
	},
	{
		title: 'Meeting Inc',
		link: 'https://www.meeting.com.uy/',
		puesto: 'Front-End Developer',
		time: 'jun. 2014 - jun. 2015'
	},
	{
		title: 'Mambo Publicidad',
		link: 'https://mambo.uy/',
		puesto: 'Diseñador y Programador Web',
		time: 'abr. 2012 - abr. 2014'
	},
];

const rows = experience.map((exp) => (
	<Table.Tr key={exp.title}>
		<Table.Td ta="start" py="md">
			<ActionIcon
				variant="light" color="red" radius="xl" size="xl"
				component="a"
				target='blank'
				href={exp.link}
				aria-label={exp.title}>
				<IconArrowUpRight size={22} />
			</ActionIcon>
		</Table.Td>
		<Table.Td ta="start" pt="md">
			<TextDimmed text={exp.time} />
		</Table.Td>
		<Table.Td ta="start" py="md">
			<Title order={3} size="h2" c="gray">{exp.title}</Title>
			<Text>{exp.puesto}</Text>
		</Table.Td>
	</Table.Tr>
));

export const ResumeSection = () => {
	return (
		<Box component="section" py="xl">
			<Container size="lg" py="xl" mb="xl">

			<Grid mb="md" align="center">
				<Grid.Col span={4}>
					<div className={classes.circle}></div>
				</Grid.Col>
				<Grid.Col span={7} offset={1}>

					<SectionTitle
						title={<T k="resume.title" />}
						subtitle={<T k="resume.subtitle" />}
					/>
					
					<Card p="xl" radius="md">
						<Table>
							<Table.Tbody>{rows}</Table.Tbody>
						</Table>
					</Card>

				</Grid.Col>
			</Grid>


			</Container>
		</Box>	
	)
}
