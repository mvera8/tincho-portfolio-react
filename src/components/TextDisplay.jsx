import { Text, Title } from '@mantine/core'
import PropTypes from "prop-types";
import classes from './TextDisplay.module.css';

export const TextDisplay = ({text, gradient}) => {
	return (
		<Title order={1} c="gray" fw={900} className={classes.title} mb="xs">
			{text}{' '} 
			<Text
				component="span"
				inherit
				variant="gradient"
				gradient={{ from: 'red.4', to: 'red.8' }}
			>{gradient}{' '}</Text>
		</Title>
	)
}

TextDisplay.propTypes = {
	text: PropTypes.object,
	gradient: PropTypes.string.isRequired,
};
