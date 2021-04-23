import React from 'react'
import './MovieDetails.css'

const MovieDetails = (props) => {

  const movie = props.location.state.movie

  const back = () => {
    props.history.push('/')
  }

  return (
    <div className="container movie-content">
      <div className="main-info">
        <h1>{movie.title}</h1>
        <h4>{movie.year}</h4>
        <h4>IMDB Rating: {movie.imdbRating}</h4>
      </div>
      <div className="poster">
        <img src={movie.poster} alt="poster" />
      </div>
      <div className="plot">
        <div>{movie.plot}</div>
      </div>
      <div className="more-info">
        <p><span className="attr">Runtime:</span> {movie.runtime}</p>
        <p><span className="attr">Genre:</span> {movie.genre}</p>
        <p><span className="attr">Director:</span> {movie.director}</p>
        <p><span className="attr">Writer:</span> {movie.writer}</p>
        <p><span className="attr">Actors:</span> {movie.actors}</p>
        <p><span className="attr">Language:</span> {movie.language}</p>
        <p><span className="attr">Country:</span> {movie.country}</p>
      </div>
      <div>
        <button className="btn btn-secondary" onClick={back}>Back</button>
      </div>
    </div>
  )

}

export default MovieDetails