import { Badge, Grid, SimpleGrid, Stack } from '@mantine/core'
import { MvButton, MvInput, MvList, MvSection, SectionTitle } from '../components'
import { IconChevronRight } from '@tabler/icons-react'
import { useI18n } from '../i18n/useI18n.js';
import T from '../i18n/T.jsx';

export const ContactSection = () => {
	const { t } = useI18n();

	return (
		<MvSection bg>
			<Grid mb="md" align="center">
				<Grid.Col span={{ base: 12, md: 12, lg: 4 }}>
					<SectionTitle
						title={<T k="contact.title" />}
						subtitle={<T k="contact.subtitle" />}
						text={<T k="contact.text" />}
					/>
					<MvList />
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 12, lg: 7 }} offset={{ md: 0, lg: 1 }}>
					<Badge variant="dot" color="red" mb="md"><T k="contact.status" /></Badge>
					<form onSubmit={(event) => event.preventDefault()}>
						<Stack gap="md">
							<SimpleGrid cols={{ base: 1, md: 1, lg: 2 }} mb={0}>
								<MvInput label={t('contact.input.name')} placeholder={t('contact.input.name')} />
								<MvInput label={t('contact.input.email')} placeholder={t('contact.input.email')} />
							</SimpleGrid>
							<MvInput label={t('contact.input.subject')} placeholder={t('contact.input.subject')} />
							<MvInput label={t('contact.input.message')} placeholder={t('contact.input.message.placeholder')} type="textarea" />
							<MvButton
								type="submit"
								text={<T k="contact.input.btn" />}
								Icon={IconChevronRight}
								disabled={true}
							/>
						</Stack>
					</form>
				</Grid.Col>
			</Grid>
		</MvSection>
	)
}
