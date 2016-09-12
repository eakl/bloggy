'use strict'

import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './App'
import WriteArticle from '../_admin/components/WriteArticle'

export default (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={WriteArticle} />
    </Route>
  </Router>
)
