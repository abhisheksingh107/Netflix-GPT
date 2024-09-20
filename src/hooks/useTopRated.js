import { useEffect } from "react";
import { API_options } from "../Utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../Utils/movieSlice";

const useTopRated = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const fetchTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?&page=1",
      API_options
    );

    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovies && 
    fetchTopRated();
  }, []);
};

export default useTopRated;
