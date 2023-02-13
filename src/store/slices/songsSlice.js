import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";
/*
A function that accepts an initial state, an object full of reducer functions, 
and a "slice name", and automatically generates action creators and action types 
that correspond to the reducers and state.
*/
const songsSlice = createSlice({
  /* when we refer here to state, it means the state that is being controlled
or managed or produced by that slice, in this case songs, outside of this slice
state means all the state big object */
  name: "song", //this is the path to our actions
  initialState: [], // Defines the initial value of movies
  reducers: {
    // 'song' + '/' + 'addSong' = 'song/addSong'
    // actions related to songs
    addSong(state, action) {
      // state is the piece of state managed by this reducer not the big state object
      state.push(action.payload);
    },
    removeSong(state, action) {
      // Remove particular song in state array - fast method
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  },
  /* This builder object is how we tell our combined reducer 
    to watch about some additional action types */
  extraReducers(builder) {
    // If movies/reset is triggered, than start this action...
    builder.addCase(reset, (state, action) => {
      // We use movieSlice.actions.reset instead of simple string
      return [];
    });
  }
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
