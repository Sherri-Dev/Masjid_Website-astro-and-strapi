import React from "react";
import { FaCalendarAlt, FaEnvelope, FaListUl } from "react-icons/fa/index";
import { MdPhoneInTalk } from "react-icons/md/index";
import Flex from "../../layouts/Flex";
import Button from "../shared/Button";

import Info from "../shared/Info";

const Main = ({ onClick }) => {
  return (
    <div className="py-4">
      <Flex className="container items-center justify-between gap-2 py-3 text-sm ">
        <div className="text-2xl">Logo</div>
        <Info
          variant={{
            name: "secondary",

            border: true,
          }}
          title="info:"
          icon={<FaCalendarAlt className="text-scColor lg:text-prColor" />}
          desc="Starting from March 10"
          descColor="text-prColor"
          hidden={"hidden md:flex"}
        />
        <Info
          variant={{
            name: "secondary",
            border: true,
          }}
          title="Call us:"
          icon={
            <MdPhoneInTalk className="text-lg text-scColor lg:text-prColor" />
          }
          desc={"+(00) 123-345-11"}
          descColor={"text-prColor"}
          hidden={"hidden md:flex"}
        />
        <Info
          variant={{
            name: "secondary",
            href: "mailto:https://help@example.com",
            border: true,
          }}
          title="Email:"
          desc="help@example.com"
          descColor="text-prColor"
          icon={<FaEnvelope />}
        />
        <div className="hidden lg:block">
          <Button>Make a donation</Button>
        </div>
        <button
          className="block bg-scColor p-3 text-lg text-white transition-colors duration-500 hover:bg-prColor focus:outline-prColor md:hidden"
          onClick={onClick}
        >
          <FaListUl />
        </button>
      </Flex>
    </div>
  );
};

export default Main;
