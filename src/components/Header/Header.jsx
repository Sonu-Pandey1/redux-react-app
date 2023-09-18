
import React, { useState } from 'react'
import "../Header/Header.scss"
import User3 from "../../images/user3.png"
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/Movie/MovieSlice'

export default function Header() {
  const dispatch = useDispatch();
  const [term ,setTerm] = useState("")
  const submitHandler =(e)=>{
    e.preventDefault();
    if(term ==="") return  alert("Pease Enter Search Term")
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm("");
    
     
  }
  return (
    <div className='header'>
      
        <div className='logo'><NavLink to="/" className="navlink">Moviex</NavLink></div>
        <div className="search-bar">
          <form onSubmit={submitHandler}>
            <input type="text" value={term} placeholder='Search Movies Or Shows ' onChange={(e)=>{setTerm(e.target.value)}} />
            <button type="submit"><i className='fa fa-search'></i></button>
          </form>
        </div>
      

      <div className='user-image'>
        <img src={User3} alt="user" />
      </div>

    </div>
  )
}
