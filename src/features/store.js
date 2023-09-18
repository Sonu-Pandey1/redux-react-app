
import { configureStore} from "@reduxjs/toolkit"
import moviesRedcer from "./Movie/MovieSlice";

const store = configureStore({
    reducer:{
        movies:moviesRedcer
    }
})

export default store;