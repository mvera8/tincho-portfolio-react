import { Image, Text } from "@mantine/core"
import PropTypes from 'prop-types';
import classes from './Logo.module.css';

export const Logo = ({ type = 'image' }) => {
	return (
		type == 'text'
			? <Text size="xl" fw={600} tt="uppercase">Martin<Text span c="red" inherit>Vera</Text></Text>
			: <Image src="/logo.svg" alt="Martín Vera" className={classes.logo} />
	)
}

Logo.propTypes = {
	type: PropTypes.string,
};
