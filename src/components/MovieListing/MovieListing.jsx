import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/Movie/MovieSlice'
import MovieCard from "../MovieCard/MovieCard"
import "./MovieListing.scss";


const MovieListing = () => {
  const movies = useSelector(getAllMovies)
  console.log(movies)
  let renderMovies = "";


  renderMovies = movies.Response === "True" ? movies.Search.map((movie, index) => <MovieCard key={index} data={movie} />) : (<div className="Movies-error"><h3>{movies.Error}</h3></div>);
  // console.log(renderMovies)

  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>{renderMovies}</div>
      </div>
    </div>
  )
}

export default MovieListing;
