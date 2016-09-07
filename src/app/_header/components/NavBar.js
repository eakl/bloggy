'use strcit'

import React from 'react'
import { Link } from 'react-router'

import './NavBar.css'

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  )
}

export default NavMenu
