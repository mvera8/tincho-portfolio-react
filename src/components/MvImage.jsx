import { Image } from '@mantine/core';
import { FloatingBadge } from './FloatingBadge';
import { isMobile } from 'react-device-detect';
import PropTypes from 'prop-types';
import T from '../i18n/T.jsx';

export const MvImage = ({image, alt}) => {
	return (
		<div style={{
			position: 'relative',
			zIndex: 10
		}}>
			<FloatingBadge text={<T k="about.degree1" />} top="80%" left={isMobile ? '-1%' : '-15%'} />
			<FloatingBadge text={<T k="about.degree2" />} top="5%" left={isMobile ? '65%' : '70%'} />
			<Image
				h={{ xs: 200, sm: 650 }}
				radius="md"
				src={'/' + image}
				alt={alt}
			/>
		</div>
	)
}

MvImage.propTypes = {
	image: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};
