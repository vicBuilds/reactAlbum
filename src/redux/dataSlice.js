import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  albumData: [],
};

export const counterSlice = createSlice({
  name: "Album",
  initialState,
  reducers: {
    saveAllDataToStore: (state, action) => {
      state.albumData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveAllDataToStore } = counterSlice.actions;

export default counterSlice.reducer;
