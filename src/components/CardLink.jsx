import { Card } from "@mantine/core"
import PropTypes from "prop-types";

export const CardLink = ({children, link}) => {
	return (
		<Card
			component="a"
      href={link}
			p={0}
			radius="md"
			withBorder
			style={{ height: '100%' }}>
			{children}
		</Card>
	)
}

CardLink.propTypes = {
	children: PropTypes.node.isRequired,
	link: PropTypes.string.isRequired,
};
