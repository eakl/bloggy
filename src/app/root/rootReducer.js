'use strict'

import { combineReducers } from 'redux'

import { reducers as header } from '../_header'

export default combineReducers({
  search: header.searchReducer
})
