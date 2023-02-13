import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";
const store = configureStore({
  reducer: {
    songs: songsReducer, // we are calling here the big mega reducer
    movies: moviesReducer
  }
});

/* const startingState = store.getState();
//console.log(songsSlice.actions.addSong('Some song'));
// songsSlice.actions.addSong('Some song') is an action creator
console.log(JSON.stringify(startingState));

// INSTEAD OF DOING THIS
 store.dispatch({
  type: "song/addSong",
  payload: "NewSong!!"
}); 

// USE THE ACTION CREATOR
store.dispatch(songsSlice.actions.addSong("Song name"));

store.dispatch({
  type: "movie/addMovie",
  payload: "There is a new movie here"
});

const finalState = store.getState();
console.log(JSON.stringify(finalState)); */

// we are not export as default because there'll be more exports

export { store, reset, addSong, removeSong, addMovie, removeMovie };
