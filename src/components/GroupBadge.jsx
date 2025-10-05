import { Badge, Group } from '@mantine/core'
import T from "../i18n/T.jsx";
import { IconSchool, IconMapPin, IconCertificate, IconWorld } from '@tabler/icons-react';

export const GroupBadge = () => {

	return (
		<Group gap="xs" mb="md">
			<Badge variant="default" leftSection={<IconMapPin color='red' size={18} />} size="lg">Uruguay</Badge>
			<Badge variant="default" leftSection={<IconWorld color='red' size={18} />} size="lg"><T k="about.languages" /></Badge>
			<Badge variant="default" leftSection={<IconSchool color='red' size={18} />} size="lg"><T k="about.degree1" /></Badge>
			<Badge variant="default" leftSection={<IconSchool color='red' size={18} />} size="lg"><T k="about.degree2" /></Badge>
			<Badge variant="default" leftSection={<IconCertificate color='red' size={18} />} size="lg"><T k="about.study" /></Badge>
		</Group>
	)
}
