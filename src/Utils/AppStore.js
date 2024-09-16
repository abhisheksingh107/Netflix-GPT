import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"; // Import userReducer
import moviesReducer from "./movieSlice";

const AppStore = configureStore({
  reducer: {
    user: userReducer, // Assign userReducer to the 'user' key
    movies: moviesReducer,
  },
});

export default AppStore;
