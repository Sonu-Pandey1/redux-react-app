
import React from 'react'
import "../Header/Header.scss"
import User3 from "../../images/user3.png"
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
      <NavLink to="/" className="navlink">
        <div className='logo'>Moviex</div>
      </NavLink>

      <div className='user-image'>
        <img src={User3} alt="user" />
      </div>

    </div>
  )
}
