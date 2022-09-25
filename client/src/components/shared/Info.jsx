import React from "react";
import PropTypes from "prop-types";

const Info = ({
  variant,
  icon,
  desc,
  descColor,
  title,
  titleClasses,
  hidden,
}) => {
  const { name, onClick, href, border } = variant;

  return (
    <div
      className={`${hidden} flex items-center gap-2 whitespace-nowrap ${descColor}`}
    >
      {name === "primary" ? (
        <>
          {icon && icon}
          {title && <span className={titleClasses}>{title}</span>}
          {desc}
        </>
      ) : name === "secondary" ? (
        <>
          <span
            className={` ${
              border &&
              "rounded-full border-2 border-dotted border-gray-300 p-4"
            }`}
          >
            {icon}
          </span>
          <span className={titleClasses}>{title}</span>
          {href ? (
            <a
              href={href}
              className="transition-colors duration-500 hover:text-scColor focus:outline-prColor/80"
            >
              {desc}
            </a>
          ) : onClick ? (
            <button
              onClick={onClick}
              className="flex items-center gap-2 focus:outline-prColor/80"
            >
              {desc}
            </button>
          ) : (
            desc
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

Info.propTypes = {
  variant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string,
    onClick: PropTypes.func,
  }),
  icon: PropTypes.node,
  border: PropTypes.bool,
  hidden: PropTypes.string,
  title: PropTypes.string,
  titleClasses: PropTypes.string,
  desc: PropTypes.node,
  descColor: PropTypes.string.isRequired,
};

Info.defaultProps = {
  hidden: "",
  variant: {
    name: "primary",
  },
  border: false,
  titleClasses: "text-scColor",
  desc: "I am dummy desc",
  descColor: "text-white",
};

export default Info;
