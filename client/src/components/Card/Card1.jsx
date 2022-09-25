import React from "react";
import PropTypes from "prop-types";
const Card1 = ({ title, href }) => {
  return (
    <a
      href={href}
      className="overflow-clip rounded-lg shadow-xl shadow-[color:rgba(0,0,0,0.03)] transition-colors duration-500 hover:bg-prColor hover:text-white focus:bg-prColor focus:outline-prColor/80"
    >
      <img src="/service.jpg" alt="Donation" className="max-h-[12rem] w-full" />
      <p className="py-4 text-center text-lg capitalize">{title}</p>
    </a>
  );
};

Card1.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
Card1.defaultProps = {
  title: "Title Here",
  href: "#",
};
export default Card1;
