import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies:[],
    tvShows:[],
}

const exploreSlice = createSlice({
    name:"explore",
    initialState,
    reducers:{
        updateMovies:(state,action)=>{
            state.movies = action.payload
        },
        updateTVShows:(state,action)=>{
            state.tvShows = action.payload
        }
    }
    
});

export const {updateMovies,updateTVShows} = exploreSlice.actions;

export default exploreSlice.reducer;