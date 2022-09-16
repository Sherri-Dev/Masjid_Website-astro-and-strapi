import React from "react";
import PropTypes from "prop-types";

const Button = ({ variant, href, children, extraClasses }) => {
  const variants = {
    primary:
      "bg-prColor  hover:bg-scColor focus:outline-none focus:ring-4 focus:ring-orange-300 dark:bg-prColor/80 dark:hover:bg-prColor dark:focus:ring-scColor",
    outlined: `outline-2 outline outline-current hover:bg-prColor hover:outline-prColor focus:ring-2 focus:ring-scColor dark:focus:ring-scColor focus:outline-scColor`,
  };

  const variantName = () => {
    return variants[variant];
  };

  return (
    <a
      href={href}
      type="button"
      className={`rounded px-5 py-2.5 text-sm font-medium text-white  transition-colors duration-500 ${variantName()} ${extraClasses}`}
    >
      {children}
    </a>
  );
};

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  extraClasses: PropTypes.string,
};

Button.defaultProps = {
  variant: "primary",
  href: "#",
  extraClasses: "",
};

export default Button;
