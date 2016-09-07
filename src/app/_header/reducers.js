'use strict'

import * as t from './actionTypes'

const initialState = { term: '' }

export const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case t.UPDATE_SEARCH_BAR:
      return {
        ...state,
        term: action.term
      }
    case t.CLEAR_SEARCH_BAR:
      return {
        ...state,
        term: ''
      }
    default:
      return state
  }
}
