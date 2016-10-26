'use strcit'

import React from 'react'

import './WriteArticle.css'

const WriteArticle = () => {
  return (
    <section className='bloggy__write-article'>
      <form>
        <input type='text' />
        <textarea></textarea>
        <input type='text' defaultValue='Tags'/>
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}

export default WriteArticle
