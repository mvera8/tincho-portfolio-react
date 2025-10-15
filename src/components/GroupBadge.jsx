import { Badge, Group, useMantineTheme } from '@mantine/core'
import T from '../i18n/T.jsx';
import { IconSchool, IconMapPin, IconCertificate, IconWorld, IconMoodKid } from '@tabler/icons-react';

export const GroupBadge = () => {
	const theme = useMantineTheme();

	return (
		<Group gap="xs" mb="md">
			<Badge variant="default" leftSection={<IconMapPin color={theme.colors.red[5]} size={18} />} size="lg">Uruguay</Badge>
			<Badge variant="default" leftSection={<IconWorld color={theme.colors.red[5]} size={18} />} size="lg"><T k="about.languages" /></Badge>
			<Badge variant="default" leftSection={<IconMoodKid color={theme.colors.red[5]} size={18} />} size="lg"><T k="about.father" /></Badge>
			<Badge variant="default" leftSection={<IconSchool color={theme.colors.red[5]} size={18} />} size="lg"><T k="about.degree1" /></Badge>
			<Badge variant="default" leftSection={<IconSchool color={theme.colors.red[5]} size={18} />} size="lg"><T k="about.degree2" /></Badge>
			<Badge variant="default" leftSection={<IconCertificate color={theme.colors.red[5]} size={18} />} size="lg"><T k="about.study" /></Badge>
		</Group>
	)
}
