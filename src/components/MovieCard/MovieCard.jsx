import React from 'react'
import './MovieCard.css'

const MovieCard = (props) => {

  return (
    <div className="Card">
      <div className="Title">
        <div>{props.title}</div>
        <div className="year">{props.year}</div>
      </div>
      <div className="Content">
        <img src={props.poster} alt={props.title}/>
      </div>
    </div>
  )

}

export default MovieCard