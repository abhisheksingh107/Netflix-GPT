import React from "react";

const TrailerTitle = ({ title, overview }) => {
  return (
    <div className="absolute pt-64 pl-32 bg-gradient-to-r from-black inset-0">
      <h1 className="text-7xl inline font-bold text-yellow-500">{title}</h1>
      <p className="max-w-[400px] p-4 text-justify leading-relaxed text-base font-sans text-white">
        {overview}
      </p>
      <div className="flex py-8">
        <button className="border border-black w-24 h-10 bg-white flex p-5 font-semibold items-center rounded-lg hover:bg-opacity-80">
          <i className="fa-solid fa-play"></i>
          <p className="text-lg px-2">Play</p>
        </button>
        <button className="border border-black w-40 rounded-lg h-10 mx-4 bg-gray-500 font-semibold flex px-5 text-white items-center hover:bg-opacity-80">
          <i className="fa-solid fa-circle-info"></i>
          <p className="text-lg px-2 hover:">More Info</p>
        </button>
      </div>
    </div>
  );
};

export default TrailerTitle;
