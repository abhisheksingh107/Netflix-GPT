import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContener from "./SecondaryContener";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";

function Browse() {
  useNowPlayingMovies();
  usePopular();
  useTopRated();
  useUpcoming();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContener/>
      {/* MainContainer
          - VideoTitle
          -VideoBackground
          
         SecondaryContainer
          - MovieList * n
          - Moviecards * n
      
      
      
      
      */}
    </div>
  );
}

export default Browse;

