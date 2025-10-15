import { ActionIcon,
	Anchor,
	Table,
	Text,
	Title,
} from '@mantine/core'
import { CardBento, Each, MvSection, SectionTitle, TextDimmed } from '../components'
import classes from './ResumeSection.module.css';
import { IconArrowUpRight } from '@tabler/icons-react';
import { useI18n } from '../i18n/useI18n.js';
import T from '../i18n/T.jsx';

export const ResumeSection = () => {
	const { get } = useI18n();
	const jobsRaw = get('resume.jobs');
	const jobs = Array.isArray(jobsRaw) ? jobsRaw : [];
	if (jobs.length === 0) return null;

	return (
		<MvSection size="sm" bg>
			<div className={classes.circle}>
				<SectionTitle
					title={<T k="resume.title" />}
					subtitle={<T k="resume.subtitle" />}
				/>

				<CardBento bg>
					<Table mb="lg">
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
												target='_blank'
												href={link + '?ref=martinvera.com.uy'}
												aria-label={title}>
												<IconArrowUpRight size={22} />
											</ActionIcon>
										</Table.Td>
										<Table.Td ta="start" pt="md">
											<TextDimmed text={time} />
										</Table.Td>
										<Table.Td ta="start" py="md">
											<Anchor href={link + '?ref=martinvera.com.uy'} target="_blank">
												<Title order={3} size="h2" c="red">{title}</Title>
											</Anchor>
											<Text>{puesto}</Text>
										</Table.Td>
									</Table.Tr>
								)}
							/>
						</Table.Tbody>
					</Table>
				</CardBento>
			</div>
		</MvSection>
	)
}
