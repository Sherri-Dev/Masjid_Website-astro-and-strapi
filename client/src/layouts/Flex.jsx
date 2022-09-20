import React from "react";
import PropTypes from "prop-types";
const Flex = ({ children, className }) => {
  return <div className={`flex w-full ${className}`}>{children}</div>;
};
Flex.propTypes = {
  className: PropTypes.string.isRequired,
};

Flex.defaultProps = {
  className: "justify-between items-center flex-wrap",
};
export default Flex;
