'use strcit'

import React from 'react'

import Header from '../_header/components/Header'
import Footer from '../_footer/Footer'

import './App.css'

const App = ({ children }) => {
  return (
    <div>
      <Header />
        { children }
      <Footer />
    </div>
  )
}

export default App
