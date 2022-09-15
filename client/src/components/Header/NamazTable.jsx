import React, { useEffect, useState } from "react";
import { FaRegMoon, FaRegSun, FaSun } from "react-icons/fa/index";
import Info from "../shared/Info";

const NamazTable = ({ showTable }) => {
  return (
    <>
      {showTable && (
        <table className="absolute top-8 left-0 w-full text-left text-xs text-gray-500 shadow-md dark:text-gray-400">
          <thead className="bg-scColor text-xs uppercase text-white ">
            <tr>
              <th
                scope="col"
                className="whitespace-nowrap py-3 px-6 capitalize"
              >
                Namaz
              </th>
              <th
                scope="col"
                className="whitespace-nowrap py-3 px-6 capitalize"
              >
                Time
              </th>
              <th
                scope="col"
                className="whitespace-nowrap py-3 px-6 capitalize"
              >
                Jamat
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap py-2 px-6 font-medium text-gray-900 dark:text-white"
              >
                <Info
                  icon={<FaRegSun className="text-scColor" />}
                  desc="Fajar"
                  descColor="text-inherit"
                />
              </th>
              <td className=" whitespace-nowrap py-2 px-3">4:50 AM</td>
              <td className=" whitespace-nowrap py-2 px-3">5:30 AM</td>
            </tr>
            <tr className="border-b  bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className=" whitespace-nowrap py-2 px-6 font-medium text-gray-900 dark:text-white"
              >
                <Info
                  icon={<FaRegSun className="text-scColor" />}
                  desc="Zuhr"
                  descColor="text-inherit"
                />
              </th>
              <td className=" whitespace-nowrap py-2 px-3">12:50 PM</td>
              <td className=" whitespace-nowrap py-2 px-3">1:30 PM</td>
            </tr>
            <tr className="border-b  bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap py-2 px-6 font-medium text-gray-900 dark:text-white"
              >
                <Info
                  icon={<FaRegSun className="text-scColor" />}
                  desc="Asr"
                  descColor="text-inherit"
                />
              </th>
              <td className=" whitespace-nowrap py-2 px-3">4:50 PM</td>
              <td className=" whitespace-nowrap py-2 px-3">5:10 PM</td>
            </tr>
            <tr className="border-b  bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap py-3 px-6 font-medium text-gray-900 dark:text-white"
              >
                <Info
                  icon={<FaRegMoon className="text-scColor" />}
                  desc="Maghrib"
                  descColor="text-inherit"
                />
              </th>
              <td className=" whitespace-nowrap py-2 px-3">6:30 PM</td>
              <td className=" whitespace-nowrap py-2 px-3">6:30 PM</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap py-3 px-6 font-medium text-gray-900 dark:text-white"
              >
                <Info
                  icon={<FaRegMoon className="text-scColor" />}
                  desc="Isha"
                  descColor="text-inherit"
                />
              </th>
              <td className=" whitespace-nowrap py-2 px-3">7:50 PM</td>
              <td className=" whitespace-nowrap py-2 px-3">8:10 PM</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

const NamazTimings = [
  {
    name: "Fajar",
    Time: "4:50 AM",
    Jamat: "5:30 AM",
    day: true,
  },
  {
    name: "Zuhr",
    Time: "4: AM",
    Jamat: "5:30 AM",
    day: true,
  },
];

export default NamazTable;
