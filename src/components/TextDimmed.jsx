import { Text } from '@mantine/core'
import PropTypes from 'prop-types';

export const TextDimmed = ({ text, align = 'left' }) => {
	return (
		<Text
			c="dimmed"
			size="sm"
			mb="md"
			tt="capitalize"
			ta={align}
		>
			{text}
		</Text>
	)
}

TextDimmed.propTypes = {
	text: PropTypes.string.isRequired,
	align: PropTypes.string,
};
