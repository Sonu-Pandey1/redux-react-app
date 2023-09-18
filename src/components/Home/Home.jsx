
import { useEffect } from "react"
import MovieListing from "../MovieListing/MovieListing"
import { useDispatch } from "react-redux"
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/Movie/MovieSlice"


export default function Home() {
    const dispatch = useDispatch()

    const  movieText = "harry";
    const showTerm = "Friends"

    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText))
        dispatch(fetchAsyncShows(showTerm))
    }, [dispatch]);


    return (

        <div>
            <div className="banner-img"></div>

            <MovieListing />
        </div>

    )
}


