import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const moviesSlice = createSlice({
  //big reducer that contains small reducers
  name: "movie",
  initialState: [], // Defines the initial value of movies
  reducers: {
    // actions related to movies
    //small reducer
    addMovie(state, action) {
      state.push(action.payload); // state update, we're pushing the payload in the array
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return []; // This is used to update our state.
    });
  }
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
