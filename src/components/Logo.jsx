import { Image, Text, useMantineColorScheme } from "@mantine/core"
import PropTypes from 'prop-types';
import classes from './Logo.module.css';
import T from "../i18n/T.jsx";

export const Logo = ({ type = 'image' }) => {
	const colorScheme = useMantineColorScheme();

	return (
		type == 'text'
			? <div>
					<Text size="xl" fw={900} className={classes.logo} tt="uppercase" c={colorScheme.colorScheme === 'dark' ? 'gray.6' : 'gray.8'}>
						Martín<Text span c={colorScheme.colorScheme === 'dark' ? 'red.5' : 'red.8'} inherit>Vera</Text>
					</Text>
					<Text size="xs" c="dimmed" ta="end">
						<T k="site.description" />
					</Text>
				</div>
			: <Image src="/logo.svg" alt="Martín Vera" className={classes.logo} />
	)
}

Logo.propTypes = {
	type: PropTypes.string,
};
