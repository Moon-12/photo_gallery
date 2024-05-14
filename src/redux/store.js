import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./slice/imageSlice";
export const store = configureStore({
  reducer: {
    imageReducer,
  },
});
