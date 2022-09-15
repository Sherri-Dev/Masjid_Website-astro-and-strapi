import React from "react";
import PropTypes from "prop-types";
import { FaInfo } from "react-icons/fa//index";

const Info = ({
  icon,
  title,
  desc,
  href,
  onClick,
  border,
  hidden,
  descColor,
}) => {
  return (
    <div className={`${hidden} flex items-center gap-2 ${descColor}`}>
      {border ? (
        <span
          className={` ${"rounded-full border-2 border-dotted border-gray-300 p-4"}`}
        >
          {icon}
        </span>
      ) : (
        icon
      )}
      {title && <span className="text-scColor">{title}</span>}
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
    </div>
  );
};

Info.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.object.isRequired,
  border: PropTypes.bool,
  hidden: PropTypes.string,
  descColor: PropTypes.string.isRequired,
};

Info.defaultProps = {
  desc: "It is a dummy desc",
  icon: <FaInfo className="text-prColor" />,
  border: false,
  descColor: "text-white",
};

export default Info;
