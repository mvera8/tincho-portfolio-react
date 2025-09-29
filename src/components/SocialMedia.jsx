import { ActionIcon, Group } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import PropTypes from 'prop-types';

const redes = [
	{ title: 'LinkedIn', link: 'https://www.linkedin.com/in/tincho8/', icon: IconBrandLinkedin },
	{ title: 'Github', link: 'https://github.com/mvera8', icon: IconBrandGithub },
	// { title: 'Email', link: 'mailto:LALA', icon: IconMail },
];

export const SocialMedia = ({align = "flex-end"}) => {
	return (
		<Group gap={0} justify={align} wrap="nowrap">
			{redes.map((red, index) => (
				<ActionIcon
					key={index}
					size="lg"
					color="gray"
					component="a"
					href={red.link}
					aria-label={red.title}
					target='blank'
					variant="subtle">
					<red.icon size={22} stroke={1.5} />
				</ActionIcon>
			))}
		</Group>
	)
}

SocialMedia.propTypes = {
	align: PropTypes.string.isRequired,
};

