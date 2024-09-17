import React from "react";
import { TMBD_Image_URL } from "../Utils/Constant";

const MovieCards = ({ posterPath }) => {
  return (
    <div className="min-w-[200px]">
      <img className="w-full h-auto rounded-lg" alt="Movies Poster" src={TMBD_Image_URL + posterPath} />
    </div>
  );
};

export default MovieCards;
