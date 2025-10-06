import { Image } from '@mantine/core';
import { FloatingBadge } from './FloatingBadge';
import PropTypes from 'prop-types';
import T from "../i18n/T.jsx";

export const MvImage = ({image, alt}) => {
	return (
			<div style={{
				position: 'relative',
				zIndex: 10
			}}>
				<FloatingBadge text={<T k="about.degree1" />} top="80%" left="-15%" />
				<FloatingBadge text={<T k="about.degree2" />} top="5%" left="70%" />
				<Image
					h={{ xs: 200, sm: 600 }}
					radius="md"
					src={"/" + image}
					alt={alt}
				/>
			</div>
	)
}

MvImage.propTypes = {
	image: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};
