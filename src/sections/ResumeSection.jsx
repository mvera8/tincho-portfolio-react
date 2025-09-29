import { ActionIcon,
	Box,
	Card,
	Container,
	Grid,
	Table, Text, Title } from '@mantine/core'
import { Each, SectionTitle, TextDimmed } from '../components'
import classes from './ResumeSection.module.css';
import { IconArrowUpRight } from '@tabler/icons-react';
import { useI18n } from '../i18n/useI18n.js';
import T from "../i18n/T.jsx";

export const ResumeSection = () => {
	const { get } = useI18n();
	const jobsRaw = get("resume.jobs");
	const jobs = Array.isArray(jobsRaw) ? jobsRaw : [];
	if (jobs.length === 0) return null;

	return (
		<Box component="section" py="xl">
			<Container size="lg" pt="xl">
				<Grid mb="md" align="center">
					<Grid.Col span={{ base: 12, md: 12, lg: 4 }}>
						<div className={classes.circle}></div>
					</Grid.Col>
					<Grid.Col span={{ base: 12, md: 12, lg: 7 }} offset={{ md: 0, lg: 1 }}>
						<SectionTitle
							title={<T k="resume.title" />}
							subtitle={<T k="resume.subtitle" />}
						/>
						<Card p={{ base: "sm", lg: "xl"}} radius="md">
							<Table>
								<Table.Tbody>
									<Each
										of={jobs}
										render={({ title, link, puesto, time }, idx) => (
											<Table.Tr key={idx}>
												<Table.Td ta="start" pt="md">
													<ActionIcon
														variant="light"
														color="red"
														radius="xl"
														size="xl"
														component="a"
														target='blank'
														href={link}
														aria-label={title}>
														<IconArrowUpRight size={22} />
													</ActionIcon>
												</Table.Td>
												<Table.Td ta="start" pt="md">
													<TextDimmed text={time} />
												</Table.Td>
												<Table.Td ta="start" py="md">
													<Title order={3} size="h2" c="gray">{title}</Title>
													<Text>{puesto}</Text>
												</Table.Td>
											</Table.Tr>
										)}
									/>
								</Table.Tbody>
							</Table>
						</Card>
					</Grid.Col>
				</Grid>
			</Container>
		</Box>	
	)
}
