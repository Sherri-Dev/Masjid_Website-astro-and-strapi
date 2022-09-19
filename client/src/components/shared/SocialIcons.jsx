import React from "react";
import PropTypes from "prop-types";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa/index";

const SocialIcons = ({ icons, iconColor, iconHoverColor }) => {
  return (
    <>
      {icons.map((icon, index) => (
        <a
          href="#"
          className={`cursor-pointer transition-colors duration-700 ${iconColor} ${iconHoverColor}`}
          key={index}
        >
          {icon}
        </a>
      ))}
    </>
  );
};

SocialIcons.propTypes = {
  icons: PropTypes.array.isRequired,
  iconsColor: PropTypes.string,
  iconHoverColor: PropTypes.string,
};

SocialIcons.defaultProps = {
  icons: [
    <FaTwitter />,
    <FaFacebookF />,
    <FaGooglePlusG className="text-lg" />,
  ],
  iconColor: "text-white",
  iconHoverColor: "hover:text-prColor",
};

export default SocialIcons;
