'use strcit'

import React from 'react'

import NavBar from './NavBar'
import SearchBar from './SearchBar'

import './Header.css'

const Header = () => {
  return (
    <header>
      <NavBar />
      <SearchBar />
    </header>
  )
}

export default Header
