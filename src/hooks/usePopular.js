import { useEffect } from "react";
import { API_options } from "../Utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../Utils/movieSlice";

const usePopular = () => {
  const dispatch = useDispatch();

  const usePopularMovies = useSelector((store) => store.movies.popularMovies);
  const Popular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      API_options
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !usePopularMovies &&
    Popular();
  }, []);
};

export default usePopular;
