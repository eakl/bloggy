'use strcit'

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateSearchBar, clearSearchBar } from '../actions'

import './SearchBar.css'

const SearchBar = (props) => {
  const { term, updateSearchBar, clearSearchBar } = props
  console.log(term)

  return (
    <section>
      <form>
        <input
          type='search'
          value={term}
          onChange={updateSearchBar}
          onBlur={clearSearchBar} />
      </form>
    </section>
  )
}

const mapStateToProps = (state) => ({
  term: state.search.term
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateSearchBar: (e) => updateSearchBar(e.target.value),
    clearSearchBar: clearSearchBar
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
