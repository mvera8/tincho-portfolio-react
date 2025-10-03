import { Box, Center, Paper, Text, ThemeIcon, Title, useMantineColorScheme } from "@mantine/core";
import PropTypes from "prop-types";

export const CardBento = ({ children, bg = false, title, subtitle, icon }) => {
  const { colorScheme } = useMantineColorScheme();

  const bgValue =
    bg === true ? (colorScheme === "dark" ? "dark" : "gray.1")
    : bg ? bg
    : "transparent";

  return (
    <Paper bg={bgValue} radius="lg" ta="center" pb={0}>
      {subtitle && (
				<Center mt="sm" mb={0}>
					{icon &&
						<ThemeIcon
						variant="transparent"
						color="red"
						mr="xs"
						size="sm"
						aria-label={subtitle}>
						{icon}
					</ThemeIcon>}
					<Text size="lg" c="dimmed">{subtitle}</Text>
				</Center>
      )}
      {title && <Title order={4} size="h3">{title}</Title>}
      <Box p="lg">{children}</Box>
    </Paper>
  );
};

CardBento.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.node, // 👈 elemento React (instanciado)
};
