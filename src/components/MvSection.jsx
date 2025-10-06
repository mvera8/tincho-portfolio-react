import { Box, Container, useMantineColorScheme } from "@mantine/core";
import PropTypes from "prop-types";

export const MvSection = ({ children, bg = false, size = "lg", align = "left", padding = "xl" }) => {
  const { colorScheme } = useMantineColorScheme();

  // Resolver valor final de background
  let bgValue;
  if (bg === true) {
    bgValue = colorScheme === "dark" ? "dark" : "red.1";
  } else if (bg === false || bg == null) {
    bgValue = "transparent";
  } else {
    // Si viene string (p.ej. "blue.0" o "#f0f0f0")
    bgValue = bg;
  }

  return (
    <Box bg={bgValue} component="section" py={padding}>
      <Container size={size} py={padding} style={{ textAlign: align }}>
        {children}
      </Container>
    </Box>
  );
};

MvSection.propTypes = {
  children: PropTypes.node.isRequired,
  // Puede ser boolean (true activa fondo por defecto) o string (token/color)
  bg: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  size: PropTypes.string,
  align: PropTypes.oneOf(["left", "center", "right", "justify"]),
	padding: PropTypes.string,
};
