import { Button, Grid, SimpleGrid, Stack, Textarea, TextInput, useMantineColorScheme } from "@mantine/core"
import { MvList, MvSection, SectionTitle } from "../components"
import { IconChevronRight } from "@tabler/icons-react"
import { useI18n } from "../i18n/useI18n.js";
import T from "../i18n/T.jsx";

export const ContactSection = () => {
	const colorScheme = useMantineColorScheme();
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
					<form onSubmit={(event) => event.preventDefault()}>
						<Stack gap="xl">
							<SimpleGrid cols={{ base: 1, md: 1, lg: 2 }} mb={0}>
								<TextInput size="lg" variant={colorScheme.colorScheme === 'dark' ? 'filled' : 'default'} label={t("contact.input.name")} placeholder={t("contact.input.name")} required />
								<TextInput size="lg" variant={colorScheme.colorScheme === 'dark' ? 'filled' : 'default'} label={t("contact.input.email")} placeholder={t("contact.input.email")} required />
							</SimpleGrid>

							<TextInput size="lg" variant={colorScheme.colorScheme === 'dark' ? 'filled' : 'default'} label={t("contact.input.subject")} placeholder={t("contact.input.subject")} required />

							<Textarea
								size="lg" variant={colorScheme.colorScheme === 'dark' ? 'filled' : 'default'}
								label={t("contact.input.message")}
								placeholder={t("contact.input.message.placeholder")}
								minRows={3}
							/>

							<Button
								type="submit"
								variant="filled"
								color="red"
								size="lg"
								rightSection={<IconChevronRight size={20} />}>
									<T k="contact.input.btn" />
							</Button>

						</Stack>
					</form>
				</Grid.Col>
			</Grid>
		</MvSection>
	)
}
