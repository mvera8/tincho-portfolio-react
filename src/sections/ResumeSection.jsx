import { ActionIcon,
	Anchor,
	Paper,
	Table,
	Text,
	Title,
} from '@mantine/core'
import { CardBento, Each, MvSection, SectionTitle, TextDimmed } from '../components'
import classes from './ResumeSection.module.css';
import { IconArrowUpRight } from '@tabler/icons-react';
import { useI18n } from '../i18n/useI18n.js';
import { isMobile } from 'react-device-detect';
import T from '../i18n/T.jsx';

export const ResumeSection = () => {
	const { get } = useI18n();
	const jobsRaw = get('resume.jobs');
	const jobs = Array.isArray(jobsRaw) ? jobsRaw : [];
	if (jobs.length === 0) return null;

	return (
		<MvSection size="sm" bg>
			<div className={!isMobile && classes.circle}>
				<SectionTitle
					title={<T k="resume.title" />}
					subtitle={<T k="resume.subtitle" />}
				/>

				<CardBento bg>
					<Paper p={{base: 'xs', lg: 'xl'}}>
						<Table>
							<Table.Tbody>
								<Each
									of={jobs}
									render={({ title, link, puesto, time }, idx) => (
										<Table.Tr key={idx}>
											{!isMobile &&
											<Table.Td ta="start" pt="md" px="md">
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
											}
										
											<Table.Td ta="start" pt="xl">
												<TextDimmed text={time} />
											</Table.Td>
											<Table.Td ta="start" py="md" px="md">
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
					</Paper>
					
				</CardBento>
			</div>
		</MvSection>
	)
}
