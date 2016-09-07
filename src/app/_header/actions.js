'use strict'

import * as t from './actionTypes'

export const updateSearchBar = (term) => ({
  type: t.UPDATE_SEARCH_BAR,
  term
})

export const clearSearchBar = () => ({
  type: t.CLEAR_SEARCH_BAR
})
