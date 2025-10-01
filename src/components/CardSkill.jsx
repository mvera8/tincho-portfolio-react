import { Card, Group, ThemeIcon, Title } from "@mantine/core"
import { IconBrandWordpress } from "@tabler/icons-react";
import PropTypes from "prop-types";

export const CardSkill = ({title, icon}) => {

	const IconCmp = icon ?? IconBrandWordpress;

	return (
		<Card radius="md" p="xs">
			<Group preventGrowOverflow={false} wrap="nowrap">
				<ThemeIcon variant="white" radius="xl" size="xl">
					<IconCmp size={40} stroke={1.5} />
				</ThemeIcon>
				<Title order={4} c="gray" ta="center">{title}</Title>
			</Group>
		</Card>
	)
}

CardSkill.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
};

