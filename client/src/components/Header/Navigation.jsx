import React from "react";
const Navigation = () => {
  return (
    <nav className="md:flex">
      <ul className="flex flex-col items-center gap-10 text-white md:flex-row md:gap-20 md:p-0">
        <li>
          <a
            href="#"
            className="  transition-colors duration-500   hover:text-prColor focus:border-none focus:outline-2 focus:outline-offset-4 focus:outline-scColor md:hover:text-scColor"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="  transition-colors duration-500   hover:text-prColor focus:border-none focus:outline-2 focus:outline-offset-4 focus:outline-scColor md:hover:text-scColor"
          >
            Classes
          </a>
        </li>
        <li>
          <a
            href="#"
            className="  transition-colors duration-500   hover:text-prColor focus:border-none focus:outline-2 focus:outline-offset-4 focus:outline-scColor md:hover:text-scColor"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="  transition-colors duration-500   hover:text-prColor focus:border-none focus:outline-2 focus:outline-offset-4 focus:outline-scColor md:hover:text-scColor"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
