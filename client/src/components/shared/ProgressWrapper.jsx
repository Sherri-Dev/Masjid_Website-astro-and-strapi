import React from "react";
import Flex from "../../layouts/Flex";
import Info from "./Info";

const ProgressWrapper = ({ progress, details }) => {
  return (
    <>
      <div className={`relative h-2 w-full rounded-full bg-gray-200`}>
        <span
          className="absolute h-full rounded-full bg-prColor"
          style={{ width: `${progress}%` }}
        ></span>
        <span
          className="absolute top-1/2 flex h-9 w-9 translate-x-[-50%] -translate-y-1/2 items-center justify-center rounded-full bg-prColor text-xs text-white shadow-md"
          style={{
            left: `${progress}%`,
          }}
        >
          {progress}%
        </span>
      </div>
      <Flex className="flex-wrap justify-between pt-6">
        {Object.keys(details).map((item, index) => {
          return (
            <Info
              title={item}
              titleClasses="text-sm text-gray-400"
              desc={details[item]}
              descColor="text-prColor"
              key={index}
            />
          );
        })}
      </Flex>
    </>
  );
};

ProgressWrapper.defaultProps = {
  progress: 50,
  details: {
    "Raised:": "$33000",
    "Goal:": "$50000",
  },
};
export default ProgressWrapper;
