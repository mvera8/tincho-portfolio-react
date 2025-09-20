import { Card, Text, ThemeIcon, Title } from '@mantine/core'
import { IconPhoto } from '@tabler/icons-react'

export const CardIcon = () => {
	return (
		<Card padding="xl" radius="md">
			<ThemeIcon variant="transparent" color="gray" mb="md" p={0}>
				<IconPhoto size={22} />
			</ThemeIcon>

			<Title order={4}>Cleanmax website</Title>

			<Text mt="xs" c="dimmed" size="sm">
				Please click anywhere on this card to claim your reward, this is not a fraud, trust us
			</Text>
		</Card>
	)
}
