import { API_options } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addTrailervideo } from "../Utils/movieSlice";
import { useEffect } from "react";

const useVideoTrailer = (movieId) => {
  const dispatch = useDispatch();

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
    getVideo();
  }, []);
};

export default useVideoTrailer;
