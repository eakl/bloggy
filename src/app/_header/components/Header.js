'use strcit'

import React from 'react'

import NavBar from './NavBar'
import TagBar from './TagBar'

import './Header.css'

const Header = () => {
  return (
    <header className='bloggy__header'>
      <section className='bloggy__header__navbar'>
        <NavBar />
      </section>
      <section className='bloggy__header__img'>
        IMG
      </section>
      <section className='bloggy__header__tagbar'>
        <TagBar />
      </section>
    </header>
  )
}

export default Header
