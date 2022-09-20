import React from "react";
import PropTypes from "prop-types";
import { getDataFromProp } from "../utils/helpers";

const Section = ({
  children,
  className,
  containerClasses,
  variant,
  ariaLabelledBy,
  padding,
  title,
}) => {
  const _variants = {
    contained: "container",
    "full-width": "xl:container",
  };
  const _padding = {
    "only-top": "pt-10 sm:pt-14 md:pt-16 lg:pt-20",
    block: "py-10 sm:py-14 md:py-16 lg:py-20",
    none: "",
  };
  return (
    <section
      className={`${getDataFromProp(_padding, padding)} ${className}`}
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
  padding: PropTypes.oneOf(["only-top", "block", "none"]),
};

Section.defaultProps = {
  className: "",
  containerClasses: "",
  paddingAllowed: true,
  variant: "contained",
  padding: "only-top",
};
export default Section;
