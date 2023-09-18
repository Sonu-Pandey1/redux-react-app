
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/Apis/MovieApi"
import APIKey  from "../../common/Apis/MovieApiKey"
import { useDispatch } from "react-redux"

const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async() => {
    const movieText = "harry"
    

    const response = await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
     return response.data;

})



const initialState={
    movies:{},
};

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state, {payload})=>{
            state.movies=payload;
        },
    },
    extraReducers:{
        [fetchAsyncMovies.pending]: () => {
            console.log("padding");
        },
        [fetchAsyncMovies.fulfilled]: (state,{payload}) => {
            console.log("fetched successfully");
            return {...state, movies : payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected!");
            
        },
    },
});

export const {addMovies} = movieSlice.actions; 
export const getAllMovies =(state)=>state.movies.movies
export default movieSlice.reducer;