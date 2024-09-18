import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"; // Import userReducer
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import langReducer from "./langSlice";

const AppStore = configureStore({
  reducer: {
    user: userReducer, // Assign userReducer to the 'user' key
    movies: moviesReducer,
    gpt: gptReducer,
    language : langReducer,

  },
});

export default AppStore;
