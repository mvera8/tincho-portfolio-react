import { Text, Title, useMantineColorScheme } from '@mantine/core'
import PropTypes from 'prop-types';
import classes from './TextDisplay.module.css';

export const TextDisplay = ({text, gradient, align = 'left'}) => {
	const colorScheme = useMantineColorScheme();

	return (
		<Title order={1} c="gray" className={classes.title} mb="xs" ta={align}>
			{text}{' '} 
			<Text
				component="span"
				inherit
				variant="gradient"
				gradient={{ from: colorScheme.colorScheme === 'dark' ? 'white' : 'red.2', to: 'red.8' }}
			>{gradient}{' '}</Text>
		</Title>
	)
}

TextDisplay.propTypes = {
	text: PropTypes.object,
	gradient: PropTypes.object,
	align: PropTypes.string,
};
