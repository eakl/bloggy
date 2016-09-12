'use strcit'

import React from 'react'
import { Link } from 'react-router'

import SearchBar from './SearchBar'

import './NavBar.css'

const NavBar = () => {
  return (
    <div className='dad-blog__navbar'>
      <section className='dad-blog__navbar__logo'>
        Logo
      </section>
      <section className='dad-blog__navbar__menu'>
        <nav>
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/category'>CATEGORY</Link></li>
            <li><Link to='/events'>EVENTS</Link></li>
            <li><Link to='/quote'>QUOTE</Link></li>
            <li><Link to='/about'>ABOUT</Link></li>
          </ul>
        </nav>
      </section>
      <section className='dad-blog__navbar__search'>
        <SearchBar />
      </section>
    </div>
  )
}

export default NavBar
