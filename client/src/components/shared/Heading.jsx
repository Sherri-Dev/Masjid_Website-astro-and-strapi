import React from "react";
import PropTypes from "prop-types";

const Heading = ({ children, title, subTitle, id, className }) => {
  return (
    <div className={className}>
      <span className="mb-1 inline-block text-prColor sm:text-lg lg:mb-2 lg:text-xl xl:mb-3 xl:text-2xl">
        {subTitle}
      </span>
      <h2
        className="mb-2 text-2xl sm:text-3xl lg:mb-4 lg:text-4xl xl:mb-5 xl:text-5xl"
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
        <p className="text-sm text-gray-700 lg:text-base lg:leading-loose xl:text-xl xl:leading-[2.25]">
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
  className: PropTypes.string,
};
Heading.defaultProps = {
  title: "Title Here",
  subTitle: "Subtitle Here",
  className: "",
};

export default Heading;
