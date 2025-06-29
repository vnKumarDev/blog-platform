import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../slices/blogsSlice";
import utilityReducer from "../slices/utilitySlice";

export const store = configureStore({
  devTools: false,
  reducer: {
    blogs: blogsReducer,
    utility: utilityReducer,
  },
});
