import { Card, Group, ThemeIcon, Title } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import PropTypes from 'prop-types';

const redes = [
	{ title: 'LinkedIn', link: 'https://www.linkedin.com/in/tincho8/', icon: IconBrandLinkedin },
	{ title: 'Github', link: 'https://github.com/mvera8', icon: IconBrandGithub },
	// { title: 'Email', link: 'mailto:LALA', icon: IconMail },
];

export const SocialMedia = ({align = "flex-end"}) => {
	return (
		<>
			{redes.map((red, index) => (
				<Card
					key={index}
					component="a"
					href={red.link}
					target="_blank"
					radius="lg"
					mb="xs"
					p="xs"
					withBorder>
					<Group preventGrowOverflow={false} wrap="nowrap">
						<ThemeIcon variant="light" color="red" radius="md" size="xl">
							<red.icon size={40} stroke={1.5} />
						</ThemeIcon>
						<Title order={4} c="gray" ta="center">{red.title}</Title>
					</Group>
				</Card>
			))}
		</>
	)
}

SocialMedia.propTypes = {
	align: PropTypes.string,
};

