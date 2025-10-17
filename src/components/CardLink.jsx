import { Card } from '@mantine/core'
import PropTypes from 'prop-types';

export const CardLink = ({children, link}) => {
	return (
		<Card
			component="a"
			href={link}
			radius="md"
			mb="md"
			withBorder
			p="xs"
			style={{ height: '100%' }}>
			{children}
		</Card>
	)
}

CardLink.propTypes = {
	children: PropTypes.node.isRequired,
	link: PropTypes.string.isRequired,
};
