
import { useEffect } from "react"
import MovieListing from "../MovieListing/MovieListing"
// import MovieApi from "../../common/Apis/MovieApi"
// import APIKey  from "../../common/Apis/MovieApiKey"
// import { useDispatch } from "react-redux"
import { addMovies } from "../../features/Movie/MovieSlice"


export default function Home(){
    // const movieText = "harry"
    // const dispatch = useDispatch()

    useEffect(()=>{
        
        // const fetchMovies = async ()=>{
            // const response = await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
            // .catch((err)=>{
            //     console.log("err ",err )
            // })
            // // console.log("this response from api",response)
            // dispatch(addMovies(response.data));
        // };
        // fetchMovies();
    },[]);


    return(
       
        <div>
            <div className="banner-img"></div>
            
            <MovieListing/>
        </div>
        
    )
}