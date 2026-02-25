import { Box, Container, useMantineColorScheme } from '@mantine/core';
import PropTypes from 'prop-types';

export const MvSection = ({ children, bg = false, size = 'lg', align = 'left', padding = 'xl' }) => {
	const { colorScheme } = useMantineColorScheme();

	let bgValue;
	if (bg === true) {
		bgValue = colorScheme === 'dark' ? 'dark' : 'gray.1';
	} else if (bg === false || bg == null) {
		bgValue = 'transparent';
	} else {
		bgValue = bg;
	}

	return (
		<Box bg={bgValue} component="section" py={padding}>
			<Container size={size} py={padding} style={{ textAlign: align }}>
				{children}
			</Container>
		</Box>
	);
};

MvSection.propTypes = {
	children: PropTypes.node.isRequired,
	bg: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	size: PropTypes.string,
	align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
	padding: PropTypes.string,
};
