'use strcit'

import React from 'react'

import NavBar from './NavBar'
import TagBar from './TagBar'

import './Header.css'

const Header = () => {
  return (
    <header className='dad-blog__header'>
      <section className='dad-blog__header__navbar'>
        <NavBar />
      </section>
      <section className='dad-blog__header__img'>
        IMG
      </section>
      <section className='dad-blog__header__tagbar'>
        <TagBar />
      </section>
    </header>
  )
}

export default Header
