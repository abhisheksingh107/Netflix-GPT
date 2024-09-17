import { useEffect } from "react";
import { API_options } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utils/movieSlice";

const usePopular = () => {
  const dispatch = useDispatch();
  const Popular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      API_options
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    Popular();
  }, []);
};

export default usePopular;
