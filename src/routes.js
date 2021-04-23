import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'

import Home from './components/Home/Home'
import MovieDetails from './components/MovieDetails/MovieDetails'

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/movie-details" component={MovieDetails}  />
    </BrowserRouter>
  )
}

export default Routes