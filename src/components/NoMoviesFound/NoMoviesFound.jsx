import React from 'react'
import './NoMoviesFound.css'

const NoMoviesFound = () => {
  return (
    <div className="nofound">
      <span className="icon">😔</span>
      <p>No movies found</p>
    </div>
  )
}

export default NoMoviesFound