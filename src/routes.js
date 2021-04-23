import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'

import SearchMovie from './components/SearchMovie/SerachMovie'

function Routes() {
  return (
    <BrowserRouter>
      <Route component={SearchMovie} path="/" exact />
    </BrowserRouter>
  )
}

export default Routes