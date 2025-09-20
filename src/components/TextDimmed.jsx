import { Text } from "@mantine/core";
import PropTypes from "prop-types";

export const TextDimmed = ({ text, children, align = "left" }) => {
  const content = children ?? text;

  return (
    <Text c="dimmed" size="sm" mb="md" tt="capitalize" ta={align}>
      {content}
    </Text>
  );
};

TextDimmed.propTypes = {
  // puede ser string o React element
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  align: PropTypes.oneOf(["left", "center", "right", "justify"]),
};
