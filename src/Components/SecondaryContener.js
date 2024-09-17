import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContener = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black py-4 -mt-[300px] font-sans">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies} />
      {/* MovieList - Popular
        movieCards*n
        MovieList - Now Playing
        MovieList - Trending 
        Movie - Horror
        */}
    </div>
  );
};

export default SecondaryContener;
