import React from "react";
import PropTypes from "prop-types";
import { getDataFromProp } from "../utils/helpers";

const Section = ({
  children,
  className,
  containerClasses,
  variant,
  paddingAllowed,
  ariaLabelledBy,
  title,
}) => {
  const _variants = {
    contained: "container",
    "full-width": "xl:container",
  };
  return (
    <section
      className={`${
        paddingAllowed && "pt-10 sm:pt-14 md:pt-16 lg:pt-20"
      } ${className}`}
      aria-labelledby={ariaLabelledBy}
      title={title}
    >
      <div
        className={`${getDataFromProp(_variants, variant)} ${containerClasses}`}
      >
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  className: PropTypes.string,
  containerClasses: PropTypes.string,
  paddingAllowed: PropTypes.bool,
  ariaLabelledBy: PropTypes.string,
  title: PropTypes.string,
  variant: PropTypes.oneOf(["contained", "full-width"]),
};

Section.defaultProps = {
  className: "",
  containerClasses: "",
  paddingAllowed: true,
  variant: "contained",
};
export default Section;
