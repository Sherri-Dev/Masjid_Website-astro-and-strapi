import React from "react";
import { FaCalendarAlt, FaEnvelope, FaListUl } from "react-icons/fa/index";
import { MdPhoneInTalk } from "react-icons/md/index";

import Info from "../shared/Info";

const Main = ({ onClick }) => {
  return (
    <div className="py-4">
      <div className="container flex items-center justify-between gap-2 py-3 text-sm ">
        <div className="text-2xl">Logo</div>
        <Info
          icon={<FaCalendarAlt className="text-scColor lg:text-prColor" />}
          title="info:"
          desc="Starting from March 10"
          descColor="text-prColor"
          border
          hidden={"hidden md:flex"}
        />
        <Info
          icon={
            <MdPhoneInTalk className="text-lg text-scColor lg:text-prColor" />
          }
          title="Call us:"
          desc="+(00) 123-345-11"
          descColor="text-prColor"
          border
          hidden={"hidden md:flex"}
        />
        <Info
          icon={<FaEnvelope />}
          title="Email:"
          desc="help@example.com"
          href="mailto:https://help@example.com"
          descColor="text-prColor"
          border
          hidden={"hidden lg:flex"}
        />
        <a
          href="#"
          type="button"
          className="hidden rounded-md bg-prColor px-5 py-2.5 text-sm font-medium text-white transition-colors duration-500 hover:bg-scColor focus:outline-none focus:ring-4 focus:ring-orange-300 dark:bg-prColor/80 dark:hover:bg-prColor dark:focus:ring-scColor lg:block"
        >
          Make a donation
        </a>
        <button
          className="block bg-scColor p-3 text-lg text-white transition-colors duration-500 hover:bg-prColor focus:outline-prColor md:hidden"
          onClick={onClick}
        >
          <FaListUl />
        </button>
      </div>
    </div>
  );
};

export default Main;
