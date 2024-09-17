import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <div className="ml-6">
        <h1 className="text-white font-bold text-3xl py-6">{title}</h1>
        <div className="flex overflow-x-auto space-x-4">
          {movies && movies.length > 0
            ? movies.map((movie) => (
                  <MovieCards key={movie.id} posterPath={movie.poster_path} />
              ))
            : "No Movie Poster Avaiable"}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
