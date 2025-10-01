import { Paper, Text, Title, useMantineColorScheme } from "@mantine/core";
import PropTypes from "prop-types";

export const CardBento = ({ children, bg = false, title, subtitle }) => {
  const { colorScheme } = useMantineColorScheme();

  // Resolver valor final de background
  let bgValue;
  if (bg === true) {
    bgValue = colorScheme === "dark" ? "dark" : "gray.1";
  } else if (bg === false || bg == null) {
    bgValue = "transparent";
  } else {
    // Si viene string (p.ej. "blue.0" o "#f0f0f0")
    bgValue = bg;
  }

  return (
		<Paper bg={bgValue} radius="md" ta="center">
			{subtitle && (
				<Text size="xl" c="dimmed" my="xs">{subtitle}</Text>
			)}
			{title && (
				<Title order={4} mb="xs">{title}</Title>
			)}
			
			{children}
		</Paper>
  );
};

CardBento.propTypes = {
  children: PropTypes.node.isRequired,
  // Puede ser boolean (true activa fondo por defecto) o string (token/color)
  bg: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	title: PropTypes.string,
	subtitle: PropTypes.string,
};
