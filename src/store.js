import { configureStore } from "@reduxjs/toolkit";

// 1- create store file
import counterReducer from "./components/counter/counterSlice";
import postsReducer from "./components/Post/PostSlice";
export const store = configureStore({
  reducer: {
    counterData: counterReducer,
    postsData: postsReducer,
  },
  devTools: false,
});
