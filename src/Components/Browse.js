import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContener from "./SecondaryContener";

function Browse() {
  useNowPlayingMovies();
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

