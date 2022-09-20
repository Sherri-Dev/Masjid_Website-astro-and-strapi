import React from "react";
import PropTypes from "prop-types";

const Navigation = ({ links }) => {
  return (
    <nav className="md:flex">
      <ul className="flex flex-col items-center gap-4 text-white md:flex-row md:gap-20 md:p-0">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="transition-colors duration-500   hover:text-prColor focus:border-none focus:outline-2 focus:outline-offset-4 focus:outline-scColor md:hover:text-scColor"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired
  ),
};

Navigation.defaultProps = {
  links: [
    {
      label: "Home",
      href: "#",
    },
    {
      label: "Classes",
      href: "#",
    },
    {
      label: "About",
      href: "#",
    },
    {
      label: "Services",
      href: "#",
    },
    {
      label: "Blog",
      href: "#",
    },
    {
      label: "Contact",
      href: "#",
    },
  ],
};

export default Navigation;
