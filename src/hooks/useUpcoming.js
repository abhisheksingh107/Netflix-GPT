import { useEffect } from "react";
import { API_options } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addUpComming } from "../Utils/movieSlice";

const useUpcoming = () => {
    const dispatch = useDispatch();
  const upComing = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?&page=1",
      API_options
    );
    const json = await data.json();
    dispatch(addUpComming(json.results));
  };

  useEffect(() => {
    upComing();
  }, []);
};

export default useUpcoming;
