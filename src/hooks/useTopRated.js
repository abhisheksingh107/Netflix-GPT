import { useEffect } from "react";
import { API_options } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Utils/movieSlice";

const useTopRated = () => {
  const dispatch = useDispatch();

  const fetchTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?&page=1",
      API_options
    );

    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    fetchTopRated();
  }, []);
};

export default useTopRated;
