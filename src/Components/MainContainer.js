import React from "react";
import { useSelector } from "react-redux";
import VideoTrailer from "./VideoTrailer";
import TrailerTitle from "./TrailerTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;
  const FirstMovie = movies[0];

  const { original_title, overview, id } = FirstMovie;

  return (
    <div>
      <TrailerTitle title={original_title} overview={overview} />
      <VideoTrailer movieId={id} />
    </div>
  );
};

export default MainContainer;
