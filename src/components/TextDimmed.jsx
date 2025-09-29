import { Text } from "@mantine/core";
import PropTypes from "prop-types";

export const TextDimmed = ({ text, children, align = "left", capitalizeText = false }) => {
  const content = children ?? text;
  const transform = capitalizeText ? "capitalize" : undefined;

  return (
    <Text c="dimmed" size="sm" ta={align} tt={transform}>
      {content}
    </Text>
  );
};

TextDimmed.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  align: PropTypes.oneOf(["left", "center", "right", "justify"]),
  capitalizeText: PropTypes.bool,
};
