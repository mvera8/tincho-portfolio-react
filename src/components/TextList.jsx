import { Box, Divider, Title } from '@mantine/core'
import PropTypes from 'prop-types';
import { TextDimmed } from './TextDimmed';

export const TextList = ({ title, text, showDivider = false }) => {
	return (
		<Box ta="center">
			<Title order={5} size="h1" c="red" mb={0}>{title}</Title>
			<TextDimmed text={text} align="center" />
			{showDivider && (
				<Divider mt="lg" />
			)}
		</Box>
	)
}

TextList.propTypes = {
	title: PropTypes.string,
	text:  PropTypes.string,
	showDivider: PropTypes.bool,
};