import React from "react";
import { FaSearch } from "react-icons/fa/index";

const SearchBox = () => {
  return (
    <form className="flex items-center gap-3 pl-4 text-white">
      <input
        type="search"
        name="search"
        id="search"
        className="bg-transparent text-scColor outline-none placeholder:text-white/40 focus:border-b focus:border-scColor focus:text-scColor"
        placeholder="Enter you keyword"
      />
      <button
        type="submit"
        className="rounded-full border border-white/50 p-2 transition-colors duration-500 hover:text-scColor focus:outline-scColor"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBox;
