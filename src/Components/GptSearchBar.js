import React from "react";
import { useSelector } from "react-redux";
import lang from "../Utils/LanguageConstant";

const GptSearchBar = () => {
  const language = useSelector((store) => store.language.lang);


  return (
    <div>
      <form className="relative flex justify-center items-center text-white inset-0 bg-gradient-to-b from-black min-h-screen translate-y-[-10%]">
        <input
          type="text"
          className="border border-black w-3/12 h-12 mx-5 px-7 bg-gray-800 opacity-90"
          placeholder={lang[language].GptSearchBarPlaceholder}
        />
        <button className="border border-black w-[10%] h-12 bg-red-700 text-xl rounded-lg">
          <i className="mx-2 fa-solid fa-magnifying-glass"></i>
          {lang[language].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
