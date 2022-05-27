import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-content'>
        <ul>
          <li>
            <NavLink to='/'>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to='/devices'>Devices</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
