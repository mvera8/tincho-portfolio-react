import { Button } from '@mantine/core';
import { isMobile } from 'react-device-detect';
import PropTypes from 'prop-types';

export const MvButton = ({
	type = 'a',             // 'a' o 'button' (u otro componente compatible)
	text,
	link,
	variant = 'filled',
	color = 'red',
	Icon,
	disabled,
	nofollow,               // opcional: fuerza nofollow
	newTab                  // opcional: fuerza target=_blank
}) => {
	// --- Guard & normalization ---
	const rawHref = typeof link === 'string' ? link.trim() : '';
	const hasHref = Boolean(rawHref);

	// si pidieron 'a' pero no hay href, hacemos fallback a button para no romper SEO/rastreo
	const shouldRenderLink = type === 'a' && hasHref && !disabled;
	const component = shouldRenderLink ? 'a' : 'button';

	// detectar externo para target/rel por defecto
	const isExternal = /^https?:\/\//i.test(rawHref);
	const target = shouldRenderLink && (newTab || isExternal) ? '_blank' : undefined;

	// rel seguro + SEO
	const relParts = [];
	if (target === '_blank') relParts.push('noopener', 'noreferrer');
	if (nofollow) relParts.push('nofollow');
	const rel = relParts.length ? relParts.join(' ') : undefined;

	// Nota: si está disabled y era link, evitamos href para no hacer clics “fantasma”.
	const href = shouldRenderLink ? rawHref : undefined;

	return (
		<Button
			component={component}
			href={href}
			target={target}
			rel={rel}
			variant={variant}
			color={color}
			size="xl"
			radius="md"
			rightSection={Icon ? <Icon size={20} /> : null}
			disabled={disabled}
			aria-disabled={disabled ? true : undefined}
			tabIndex={disabled ? -1 : undefined}
			fullWidth={isMobile ? true : false}
		>
			{text}
		</Button>
	);
};

MvButton.propTypes = {
	type: PropTypes.string, // 'a' o 'button'
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	link: PropTypes.string,
	variant: PropTypes.string,
	color: PropTypes.string,
	Icon: PropTypes.elementType,
	disabled: PropTypes.bool,
	nofollow: PropTypes.bool,
	newTab: PropTypes.bool
};
