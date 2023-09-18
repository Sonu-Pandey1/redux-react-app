import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies,getAllShows } from '../../features/Movie/MovieSlice'
import MovieCard from "../MovieCard/MovieCard"
import "./MovieListing.scss";


const MovieListing = () => {
  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)
  console.log(movies)
  let renderMovies,renderShows = "";


  renderMovies = movies.Response === "True" ? movies.Search.map((movie, index) => <MovieCard key={index} data={movie} />) : (<div className="Movies-error"><h3>{movies.Error}</h3></div>);

  renderShows = shows.Response === "True" ? shows.Search.map((shows, index) => <MovieCard key={index} data={shows} />) : (<div className="Movies-error"><h3>{shows.Error}</h3></div>);
  

  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>{renderMovies}</div>
      </div> 
      <div className='show-list'>
        <h2>Shows</h2>
        <div className='movie-container'>{renderShows}</div>
      </div>
    </div>
  )
}

export default MovieListing;
