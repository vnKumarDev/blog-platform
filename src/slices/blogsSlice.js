import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const blogsSlice = createSlice({
  name: "blogsList",
  initialState,
  reducers: {
    loadBlogCategories(state, action) {
      state.blogCategories = action.payload;
    },
    loadBlogs(state, action) {
      state.blogsList = action.payload;
    },
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
});

export const { loadBlogCategories, loadBlogs, setSelectedCategory } =
  blogsSlice.actions;

export default blogsSlice.reducer;
