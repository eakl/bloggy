'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import routes from './root/routes'
import store from './root/configureStore'

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root-app')
)
