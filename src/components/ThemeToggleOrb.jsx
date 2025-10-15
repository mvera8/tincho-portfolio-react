import { useEffect, useState } from 'react';
import { UnstyledButton, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import PropTypes from 'prop-types';
import cls from './ThemeToggleOrb.module.css';

export function ThemeToggleOrb({ className }) {
	const { setColorScheme } = useMantineColorScheme();
	const mode = useComputedColorScheme('light', { getInitialValueInEffect: true });
	const [isOn, setIsOn] = useState(mode === 'dark');

	// Sincroniza si el tema cambia por fuera (otro botón, OS, etc.)
	useEffect(() => {
		setIsOn(mode === 'dark');
	}, [mode]);

	const toggle = () => {
		const next = !isOn;
		setIsOn(next);                    // anima al instante
		setColorScheme(next ? 'dark' : 'light'); // actualiza tema real
	};

	return (
		<UnstyledButton
			type="button"
			onClick={toggle}
			className={`${cls.root} ${className || ''}`}
			aria-label="Cambiar tema"
			role="switch"
			aria-checked={isOn}
			data-dark={isOn}
		>
			<span className={cls.orb}>
				<span className={cls.crescent} />
			</span>
		</UnstyledButton>
	);
}

ThemeToggleOrb.propTypes = {
	className: PropTypes.node,
};
