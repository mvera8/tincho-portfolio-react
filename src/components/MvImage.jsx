import { Image } from '@mantine/core';
import PropTypes from 'prop-types';
import { FloatingBadge } from './FloatingBadge';

export const MvImage = ({image, alt}) => {
	return (
			<div style={{
				position: 'relative',
				zIndex: 10
			}}>
				<FloatingBadge text="Diseñador Gráfico" top="80%" left="-15%" />
				<FloatingBadge text="Tecnico en Diseño Web" top="5%" left="70%" animation="fade-right" />
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
