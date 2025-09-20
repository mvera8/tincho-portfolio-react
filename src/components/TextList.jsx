import { Divider, Text } from '@mantine/core'
import PropTypes from 'prop-types';
import { TextDimmed } from './TextDimmed';

export const TextList = ({ title, text, showDivider = false }) => {
	return (
		<div>
			<Text fw={700} c="red" size="xl" mb={0}>{title}</Text>
			<TextDimmed text={text} />
			{showDivider && (
				<Divider />
      )}
		</div>
	)
}

TextList.propTypes = {
	title: PropTypes.string,
	text:  PropTypes.string,
	showDivider: PropTypes.bool,
};