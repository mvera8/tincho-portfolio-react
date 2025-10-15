import { RingProgress, Text } from '@mantine/core'

export const GoogleNumber = () => {
	return (
		<>
			<RingProgress
				size={190}
				thickness={10}
				mx="auto"
				roundCaps
				label={
					<Text size={50} weight={700} ta="center">
						90
					</Text>
				}
				sections={[
					{ value: 99, color: 'green' },
				]}
			/>
		</>
	)
}
