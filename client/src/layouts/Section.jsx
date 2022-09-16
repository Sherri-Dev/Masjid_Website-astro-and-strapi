import React from "react";
import PropTypes from "prop-types";

const Section = ({ children, className, containerClasses }) => {
  return (
    <section className={`py-10 sm:py-14 md:py-16 lg:py-20 ${className}`}>
      <div className={`container ${containerClasses}`}>{children}</div>
    </section>
  );
};

Section.propTypes = {
  className: PropTypes.string,
  containerClasses: PropTypes.string,
};

Section.defaultProps = {
  className: "",
  containerClasses: "",
};
export default Section;
