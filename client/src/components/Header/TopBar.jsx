import React, { useState } from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaMosque,
  FaRegClock,
  FaRegMap,
  FaTwitter,
} from "react-icons/fa/index";
import Info from "../shared/Info";
import { RiArrowDownSFill } from "react-icons/ri/index";
import { RiArrowUpSFill } from "react-icons/ri/index";
import NamazTable from "./NamazTable";

const TopBar = () => {
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="order-1 bg-scColor text-white lg:-order-1">
      <div className="container flex justify-between gap-4 py-3 text-xs ">
        <div className="hidden items-center gap-6 lg:flex">
          <Info
            icon={<FaRegMap className="text-prColor" />}
            desc={<address>New Orleans, Jamia Mosque</address>}
          />
          <span className="opacity-40">|</span>
          <Info
            icon={<FaRegClock className="text-prColor" />}
            desc={<time>Mon - Sat 8:00 am - 18:00 pm</time>}
          />
        </div>
        <div className="relative flex w-full items-center justify-center gap-6 lg:w-fit lg:justify-start">
          <Info
            icon={<FaMosque className="text-xl text-prColor" />}
            desc={
              <>
                Namaz Timings{" "}
                {!showTable ? (
                  <RiArrowDownSFill className="text-lg" />
                ) : (
                  <RiArrowUpSFill className="text-lg" />
                )}
              </>
            }
            onClick={() => setShowTable(!showTable)}
          />
          <NamazTable showTable={showTable} />
          <div className="hidden items-center gap-4 text-xs lg:flex">
            Follow us:
            <a href="#">
              <FaTwitter className=" cursor-pointer transition-colors duration-700 hover:text-prColor" />
            </a>
            <a href="#">
              <FaFacebookF className=" cursor-pointer transition-colors duration-700 hover:text-prColor" />
            </a>
            <a href="#">
              <FaGooglePlusG className="cursor-pointer text-lg transition-colors duration-700 hover:text-prColor" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
