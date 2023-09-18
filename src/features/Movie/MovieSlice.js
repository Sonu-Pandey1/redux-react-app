
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/Apis/MovieApi"
import APIKey  from "../../common/Apis/MovieApiKey"
// import { useDispatch } from "react-redux"

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async() => {
    const movieText = "harry"

    const response = await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
     return response.data;
    
});

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async() => {
    const seriesText = "Friends"

    const response = await MovieApi.get(`?apiKey=${APIKey}&s=${seriesText}&type=series`)
     return response.data;
    
});

export const fetchAsyncMovieOrShowsDetail = createAsyncThunk("movies/fetchAsyncMovieOrShowsDetail", async(id) => {

    const response = await MovieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
    
});



const initialState={
    movies:{},
    shows:{},
    selectMovieOrShow:{}
};

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        // addMovies:(state, {payload})=>{
        //     state.movies=payload;
        // },
        removeSelectedMovieOrShow: (state) =>{
            state.selectMovieOrShow ={}

        }
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
        [fetchAsyncShows.fulfilled]: (state,{payload}) => {
            console.log("fetched successfully");
            return {...state, shows : payload };
        },
        [fetchAsyncMovieOrShowsDetail.fulfilled]: (state,{payload}) => {
            console.log("fetched successfully");
            return {...state, selectMovieOrShow : payload };
        },
    },
});

export const {removeSelectedMovieOrShow} = movieSlice.actions; 
export const getAllMovies =(state)=>state.movies.movies
export const getAllShows =(state)=>state.movies.shows
export const getSelectedMovieOrShow =(state)=>state.movies.selectMovieOrShow;
export default movieSlice.reducer;