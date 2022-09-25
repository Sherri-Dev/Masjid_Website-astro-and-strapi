import React from "react";
import { getDataFromProp } from "../../utils/helpers";
import Info from "../shared/Info";
import PropTypes from "prop-types";

const NamazTime = ({ title, beginTime, iqamahTime, variant }) => {
  const bgVariantsObj = {
    shaded: "bg-gradient-to-r from-gray-100",
    transparent: "bg-transparent",
    colored: "bg-prColor",
  };

  const variants = getDataFromProp(bgVariantsObj, variant);
  return (
    <div
      className={`${variants} ${
        variant === "colored" && "text-white"
      } flex-1 p-8 text-sm`}
    >
      <h3 className="mb-2 text-xl uppercase sm:mb-3 sm:text-2xl lg:mb-4">
        {title}
      </h3>
      <Info
        title={"Begins"}
        desc={beginTime}
        descColor={variant === "colored" ? "text-white" : "text-prColor"}
        titleClasses="text-scColor font-semibold"
      />
      <Info
        title={"Iqamah"}
        desc={iqamahTime}
        descColor={variant === "colored" ? "text-white" : "text-prColor"}
        titleClasses="text-scColor font-semibold"
      />
    </div>
  );
};

NamazTime.propTypes = {
  bg: PropTypes.oneOf(["shaded", "transparent"]).isRequired,
};
NamazTime.defaultProps = {
  bg: "transparent",
};
export default NamazTime;
