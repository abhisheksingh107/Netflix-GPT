import { API_options } from "../Utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailervideo } from "../Utils/movieSlice";
import { useEffect } from "react";

const useVideoTrailer = (movieId) => {
  const dispatch = useDispatch();

  const useVideoTrailer = useSelector((store) => store.movies.trailerVideo);

  const getVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_options
    );
    const json = await data.json();

    const filterTrailer = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailer[0];

    dispatch(addTrailervideo(trailer));
  };

  useEffect(() => {

    !useVideoTrailer && 
    getVideo();
  }, []);
};

export default useVideoTrailer;
