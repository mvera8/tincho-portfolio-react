import { Button } from '@mantine/core';
import PropTypes from 'prop-types';

export const MvButton = ({
	type = 'a',
	text,
	link,
	variant = 'filled',
	color = 'red',
	Icon,
	disabled
}) => {
	return (
		<Button
			component={type}
			href={link ? link : null}
			variant={variant}
			color={color}
			size="xl"
			radius="md"
			rightSection={Icon ? <Icon size={20} /> : null}
			disabled={disabled}
		>
			{text}
		</Button>
	);
};

MvButton.propTypes = {
	type: PropTypes.string,
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	link: PropTypes.string.isRequired,
	variant: PropTypes.string,
	color: PropTypes.string,
	Icon: PropTypes.elementType,
	disabled: PropTypes.bool
};
