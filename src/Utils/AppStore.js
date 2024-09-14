import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"; // Import userReducer

const AppStore = configureStore({
  reducer: {
    user: userReducer, // Assign userReducer to the 'user' key
  },
});

export default AppStore;
