import { useEffect, useState } from 'react';
import { Badge, Transition } from '@mantine/core';
import { isMobile } from 'react-device-detect';
import PropTypes from 'prop-types';

const toCss = (v) => (v == null ? undefined : typeof v === 'number' ? `${v}px` : v);

export const FloatingBadge = ({ text, top, left, animation = 'fade-left' }) => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);

	return (
		<Transition
			mounted={mounted}
			transition={animation}
			duration={900}
			timingFunction="ease-in-out">
			{(styles) => (
				<Badge
					variant="outline"
					bg="red.1"
					color="red"
					size={isMobile ? 'md' : 'xl'}
					style={{
						...styles,
						position: 'absolute',
						top: toCss(top),
						left: toCss(left),
						pointerEvents: 'none',
					}}
				>
					{text}
				</Badge>
			)}
		</Transition>
	);
};

FloatingBadge.propTypes = {
	text: PropTypes.node.isRequired,
	top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	animation: PropTypes.string,
};
