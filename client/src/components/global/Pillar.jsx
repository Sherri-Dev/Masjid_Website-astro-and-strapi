import React from "react";
import PropTypes from "prop-types";

const Pillar = ({ title, desc, img }) => {
  return (
    <>
      <div className="pillar-container text-center">
        <div className="pillar mb-4 rounded-full border border-dotted border-white bg-prColor/40 p-9 xl:p-14">
          <img src={img.src} alt={img.alt} className="w-auto" />
        </div>
        <h3 className="mb-2 text-xl text-white">{title}</h3>
        <p className="text-prColor">{desc}</p>
      </div>
    </>
  );
};

Pillar.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};
Pillar.defaultProps = {
  title: "Shahadah",
  desc: "(Faith)",
  img: {
    src: "/clicker.png",
  },
};
export default Pillar;
