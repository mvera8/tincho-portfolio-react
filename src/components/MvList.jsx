import { List, ThemeIcon } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'

export const MvList = () => {
	return (
		<List
			my="xl"
			spacing="xs"
			center
			icon={
				<ThemeIcon color="teal" size={30} radius="xl">
					<IconCheck size={20} />
				</ThemeIcon>
			}
		>
			<List.Item>5+ Years of Experience</List.Item>
			<List.Item>profesional Web designer</List.Item>
			<List.Item>Mobile Apps Design</List.Item>
			<List.Item>Custom Design Support</List.Item>
		</List>
	)
}
