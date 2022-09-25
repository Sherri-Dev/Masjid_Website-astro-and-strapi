import React from "react";
import PropTypes from "prop-types";
import { getDataFromProp } from "../utils/helpers";

const Grid = ({ variant, children }) => {
  const grid_variants = {
    "three-col": "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    "four-col": "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  };

  return (
    <div
      className={`mt-4 grid gap-2 sm:gap-4 lg:gap-6 ${getDataFromProp(
        grid_variants,
        variant
      )}`}
    >
      {children}
    </div>
  );
};

Grid.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
Grid.defaultProps = {
  variant: "three-col",
};
export default Grid;
