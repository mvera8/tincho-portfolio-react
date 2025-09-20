import { Image } from '@mantine/core';
import PropTypes from 'prop-types';

export const MvImage = ({image, alt}) => {
	return (
		<Image h={600} radius="md" src={"/public/" + image} alt={alt} />
	)
}

MvImage.propTypes = {
	image: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};
