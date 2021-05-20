import React, { useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './DisplayCards.css'

const DisplayCards = ({ movies }) => {

  return (
    <div>
      <div className="Cards">
        {movies.map(movie =>
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        )}
      </div>
    </div>
  )
}

export default DisplayCards