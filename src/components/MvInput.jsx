import { TextInput, Textarea, useMantineColorScheme } from '@mantine/core';
import PropTypes from 'prop-types';

export const MvInput = ({
	label,
	placeholder,
	type = 'input', // 'input' | 'textarea'
	minRows = 3,    // por si querés cambiarlo
	...props        // value, onChange, name, etc.
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
			disabled
			{...(isTextarea ? { minRows } : {})}
			{...props}
		/>
	);
};

MvInput.propTypes = {
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	type: PropTypes.oneOf(['input', 'textarea']),
	minRows: PropTypes.number,
};
