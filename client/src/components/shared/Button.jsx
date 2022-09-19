import React from "react";
import PropTypes from "prop-types";
import { getDataFromProp } from "../../utils/helpers";

const Button = ({ variant, href, children, size, extraClasses }) => {
  const _variants = {
    primary:
      "bg-prColor  hover:bg-scColor focus:outline-none focus:ring-4 focus:ring-orange-300 dark:bg-prColor/80 dark:hover:bg-prColor dark:focus:ring-scColor",
    outlined: `outline-2 outline outline-current hover:bg-prColor hover:outline-prColor focus:ring-2 focus:ring-scColor dark:focus:ring-scColor focus:outline-scColor`,
  };
  const _size = {
    sm: "text-sm",
    md: "lg:px-8 lg:py-3.5 lg:text-base xl:text-lg",
    lg: "sm:text-lg",
  };
  return (
    <a
      href={href}
      type="button"
      className={`rounded px-5 py-2.5 ${size} font-medium text-white  transition-colors duration-500 ${getDataFromProp(
        _variants,
        variant
      )} ${getDataFromProp(_size, size)} ${extraClasses}`}
    >
      {children}
    </a>
  );
};

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  extraClasses: PropTypes.string,
  size: PropTypes.string,
};

Button.defaultProps = {
  variant: "primary",
  href: "#",
  extraClasses: "",
  size: "sm",
};

export default Button;
