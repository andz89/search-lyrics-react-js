import React from "react";

const List = ({ lyrics }) => {
  return (
    <>
      {lyrics.map((lyric) => (
        <div
          key={lyric.id}
          className="bg-gray-200   w-[250px] my-3  py-2 px-4 rounded shadow-md"
        >
          <hr />
          <div key={lyric.id} className="my-3 ">
            <h3 className="text-base font-medium text-slate-900">
              {lyric.name}
            </h3>
            <p className="text-slate-800">
              {lyric.description}{" "}
              <a href={lyric.link} className="text-sm text-indigo-500">
                {lyric.link}
              </a>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default List;
