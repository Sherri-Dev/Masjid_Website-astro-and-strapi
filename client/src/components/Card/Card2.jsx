import React from "react";
import PropTypes from "prop-types";
import Info from "../shared/Info";
import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa/index";
import Flex from "../../layouts/Flex";
import { text_truncate } from "../../utils/helpers";

const Card2 = ({ href, title, author, date, children }) => {
  return (
    <div className="card-2 overflow-clip rounded shadow-xl shadow-[color:rgba(0,0,0,0.03)]">
      <a
        href={href}
        className="block h-[200px] overflow-hidden object-cover xl:h-[250px]"
      >
        <img
          src="/education-for-all.jpg"
          alt="education for all"
          className="h-full w-full"
        />
      </a>
      <div className="px-4 pb-6">
        <h3 className="mt-5 text-2xl capitalize transition-colors duration-500 hover:text-prColor">
          <a href={href}>{title}</a>
        </h3>
        <Flex className="mt-3 flex-wrap gap-3">
          <Info
            desc={<span className="text-sm capitalize">{date}</span>}
            descColor="text-gray-500"
            icon={<FaRegCalendarAlt className="text-prColor" />}
          />
          <Info
            desc={<span className="text-sm">{author}</span>}
            descColor="text-gray-500"
            icon={<FaRegUser className="text-prColor" />}
          />
        </Flex>
        <p className="mt-4 text-sm leading-[1.75] text-gray-600">
          {text_truncate(
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus temporibus perferendis accusantium facilis, quia vero, saepe cupiditate sapiente eveniet neque, veniam aliquid distinctio reiciendis. Inventore exercitationem a perferendis qui?"
          )}
        </p>
        {children && <div className="mt-6"> {children}</div>}
      </div>
    </div>
  );
};

Card2.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  children: PropTypes.node,
};
Card2.defaultProps = {
  href: "#",
  title: "Educate Rural Kenya",
  author: "Unknown Author",
  date: "76 Days Left ",
};
export default Card2;
