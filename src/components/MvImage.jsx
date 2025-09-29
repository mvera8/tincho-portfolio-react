import { Box, Image } from '@mantine/core';
import PropTypes from 'prop-types';

export const MvImage = ({image, alt}) => {
	return (
		<Box bg="red.3" p="xl" pr={0}>
			<Image
				h={{ md: 200, lg: 600 }}
				radius="md"
				src={"/" + image}
				alt={alt}
				style={{
					borderTopRightRadius: 0,
					borderBottomRightRadius: 0
				}}
			/>
		</Box>
	)
}

MvImage.propTypes = {
	image: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};
