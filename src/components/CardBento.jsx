import { Box, Card, ThemeIcon, Title, useMantineColorScheme } from "@mantine/core";
import PropTypes from "prop-types";
import { TextDimmed } from "./TextDimmed";

export const CardBento = ({ children, bg = false, title, subtitle, icon }) => {
  const { colorScheme } = useMantineColorScheme();

  const bgValue =
    bg === true ? (colorScheme === "dark" ? "dark" : "gray.1")
    : bg ? bg
    : "transparent";

  return (
		<Card
			padding="xl"
			radius="md"
			withBorder
			bg={bgValue}
		>		
			{icon &&
				<ThemeIcon
					variant="transparent"
					color="red"
					mr="xs"
					size="sm"
					aria-label={subtitle}>
					{icon}
				</ThemeIcon>}							
			{title && <Title order={4} size="h3" mb="sm">{title}</Title>}
			{subtitle && (
				<TextDimmed text={subtitle} />
      )}
			<Card.Section>
				<Box
					mx="xl"
					p="xl"
					pb={0}>
					{children}
				</Box>
			</Card.Section>
		</Card>
  );
};

CardBento.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.node, // 👈 elemento React (instanciado)
};
