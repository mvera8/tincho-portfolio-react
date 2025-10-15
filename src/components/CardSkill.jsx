import { Card, Group, ThemeIcon, Title } from '@mantine/core';
import { IconBrandWordpress } from '@tabler/icons-react';
import PropTypes from 'prop-types';

export const CardSkill = ({ title, icon: IconCmp }) => {
	const Icon = IconCmp || IconBrandWordpress;

	return (
		<Card radius="xl" p="xs">
			<Group preventGrowOverflow={false} wrap="nowrap">
				<ThemeIcon variant="light" color="red" radius="xl" size="xl">
					<Icon size={40} stroke={1.5} />
				</ThemeIcon>
				<Title order={4} c="gray" ta="center">
					{title}
				</Title>
			</Group>
		</Card>
	);
};

CardSkill.propTypes = {
	title: PropTypes.string.isRequired,
	// Acepta un componente (p.ej., IconBrandWordpress) o un elemento (<IconBrandWordpress />)
	icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),
};
