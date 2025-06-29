import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: {},
  error: {},
  searchText: {},
};

export const utilitySlice = createSlice({
  name: "utilityState",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = {
        ...state.loading,
        [action.payload.component]: action.payload.loading,
      };
    },
    setSearchText(state, action) {
      state.searchText = {
        ...state.searchText,
        [action.payload.component]: action.payload.searchText,
      };
    },
  },
});

export const { setLoading, setSearchText } = utilitySlice.actions;

export default utilitySlice.reducer;
