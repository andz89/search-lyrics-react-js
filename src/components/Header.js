import React from "react";

const Header = ({ query, onChange }) => {
  return (
    <label className="flex gap-2 items-center  justify-center mt-5 mb-3">
      <input
        placeholder="search lyrics"
        value={query}
        onChange={onChange}
        className="placeholder:italic h-9 placeholder:text-slate-400 block bg-white w-1/2 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      />
    </label>
  );
};

export default Header;
