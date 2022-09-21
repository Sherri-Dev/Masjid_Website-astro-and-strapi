import React from "react";
import PropTypes from "prop-types";
import { getDataFromProp } from "../../utils/helpers";

const Heading = ({ children, title, subTitle, id, alignment, theme }) => {
  const _alignment = {
    left: "text-left",
    centered: "text-center",
  };
  const _theme = {
    normal: "",
    inverted: "text-white",
  };
  return (
    <div className={getDataFromProp(_alignment, alignment)}>
      <span className="mb-1 inline-block capitalize text-prColor sm:text-lg lg:mb-2 lg:text-xl xl:mb-3 xl:text-2xl">
        {subTitle}
      </span>
      <h2
        className={`mb-2 text-2xl capitalize sm:text-3xl lg:mb-4 lg:text-4xl xl:mb-5 xl:text-5xl ${getDataFromProp(
          _theme,
          theme
        )}`}
        id={id}
      >
        {title}
      </h2>
      <img
        src="/heading-border.png"
        alt="Heading Border"
        className="mb-4 inline-block lg:mb-6"
      />
      {children && (
        <p className="mx-auto max-w-[60ch] text-xs text-gray-500 lg:text-base lg:leading-loose xl:text-xl xl:leading-[2.25]">
          {children}
        </p>
      )}
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};
Heading.defaultProps = {
  title: "Title Here",
  subTitle: "Subtitle Here",
  variant: "left",
};

export default Heading;
