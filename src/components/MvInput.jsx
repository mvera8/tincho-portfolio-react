import { TextInput, Textarea, useMantineColorScheme } from '@mantine/core';
import PropTypes from 'prop-types';

export const MvInput = ({
	label,
	name,
	placeholder,
	disabled = false,  // Cambié el default a false
	type = 'input',
	minRows = 3,
	register,  // ⭐ Recibir register como prop
	...props
}) => {
	const { colorScheme } = useMantineColorScheme();
	const isTextarea = type === 'textarea';
	const Component = isTextarea ? Textarea : TextInput;

	return (
		<Component
			size="lg"
			variant={colorScheme === 'dark' ? 'filled' : 'default'}
			label={label}
			placeholder={placeholder}
			required
			disabled={disabled}
			{...(isTextarea ? { minRows } : {})}
			{...props}
			{...register(name, { required: true })}
		/>
	);
};

MvInput.propTypes = {
	name: PropTypes.string.isRequired,
	register: PropTypes.func.isRequired,  // ⭐ Añadir PropType
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	type: PropTypes.oneOf(['input', 'textarea']),
	minRows: PropTypes.number,
	disabled: PropTypes.bool,
};