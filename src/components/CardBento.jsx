import { Box, Card, ThemeIcon, Title, useMantineColorScheme } from '@mantine/core';
import { TextDimmed } from './TextDimmed';
import PropTypes from 'prop-types';

export const CardBento = ({ children, bg = false, title, subtitle, icon }) => {
	const { colorScheme } = useMantineColorScheme();

	const bgValue =
    bg === true ? (colorScheme === 'dark' ? 'dark.7' : 'gray.2')
    	: bg ? bg
    		: 'transparent';

	return (
		<Card
			p={0}
			radius="md"
			bg={bgValue}
			style={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
				minHeight: 130,
			}}
		>
			{icon &&
        <ThemeIcon
        	variant="transparent"
        	color="red"
        	mr="xs"
        	size="sm"
        	aria-label={subtitle}
        >
        	{icon}
        </ThemeIcon>
			}

			{(title || subtitle) && (
				<Box m="xl">
					{title && <Title order={4} size="h3" mb="sm">{title}</Title>}
					{subtitle && <TextDimmed text={subtitle} />}
				</Box>
			)}

			<div style={{ flex: 1 }}>
				{children}
			</div>
		</Card>
	);
};

CardBento.propTypes = {
	children: PropTypes.node,
	bg: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	title: PropTypes.string,
	subtitle: PropTypes.string,
	icon: PropTypes.node,
};
