import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { Netflix_BgPhoto } from "../Utils/Constant";

const GptSearch = () => {
  return (
    <div>
         <img className="absolute" src={Netflix_BgPhoto} alt="netflix background" />
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
