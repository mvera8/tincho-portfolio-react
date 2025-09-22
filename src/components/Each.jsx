import { Children } from "react";
import PropTypes from "prop-types";

export const Each = ({ render, of }) => {
  const list = Array.isArray(of)
    ? of
    : (of && typeof of === "object" ? Object.values(of) : []);

  return Children.toArray(list.map((item, index) => render(item, index)));
};

Each.propTypes = {
  render: PropTypes.func.isRequired,
  of: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
