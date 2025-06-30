import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogsList: [],
  selectedCategory: "",
  selectedBlog: null,
};

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
    setSelectedBlog(state, action) {
      state.selectedBlog = action.payload;
    },
  },
});

export const {
  loadBlogCategories,
  loadBlogs,
  setSelectedCategory,
  setSelectedBlog,
} = blogsSlice.actions;

export default blogsSlice.reducer;
