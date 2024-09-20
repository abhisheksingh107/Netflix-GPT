import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../Utils/LanguageConstant";
import openai from "../Utils/openAi";
import { API_options } from "../Utils/Constant";
import { addgptMovies } from "../Utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const language = useSelector((store) => store.language.lang);

  const searchText = useRef();

  // Seacrh movie TMDB

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_options
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a movie Recommdation for movies and suggest me some movies for query:" +
      searchText.current.value +
      "Only give me the name of 5 movies comma seprated";

    const getResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(getResults.choices[0]?.message?.content);

    // Chennai Express, Bawarchi, Chef, Luv Shuv Tey Chicken Khurana, Daawat-e-Ishq

    const gptMovies = getResults.choices[0]?.message?.content.split(",");

    // ["Chennai Express", "Bawarchi", "Chef", "Luv Shuv Tey Chicken Khurana", "Daawat-e-Ishq"]
    // For Each Movie I will search TMDB API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB());

    // Data will return 5 promises [promise, promise, promise, promise, promise]

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addgptMovies({ movieName: getResults, movieResults: tmdbResults })
    );
  };

  return (
    <div>
      <form
        className="relative flex justify-center items-center text-white inset-0 bg-gradient-to-b from-black min-h-screen translate-y-[-10%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="border border-black w-3/12 h-12 mx-5 px-7 bg-gray-800 opacity-90"
          placeholder={lang[language].GptSearchBarPlaceholder}
        />
        <button
          className="border border-black w-[10%] h-12 bg-red-700 text-xl rounded-lg"
          onClick={handleGptSearch}
        >
          <i className="mx-2 fa-solid fa-magnifying-glass"></i>
          {lang[language].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
