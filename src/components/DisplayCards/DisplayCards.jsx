import React, { useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './DisplayCards.css'

const DisplayCards = ({ movies }) => {

  return (
    <div>
      <div className="Cards">
        {movies.map(m =>
          <div key={m.id}>
            <MovieCard movie={m} />
          </div>
        )}
      </div>
    </div>
  )
}

export default DisplayCards