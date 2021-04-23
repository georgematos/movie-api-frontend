import React from 'react'
import './MovieCard.css'
import Configs from '../Helpers/Configs'

const MovieCard = (props) => {

  const showDetails = () => {
    console.log('clicou no ' + props.movie.title)
    fetch(`${Configs.urlApi}/movie?id=${props.movie.id}`)
    .then(res => res.json())
    // .then(setLoading(true))
    .then((data) => {
      setTimeout(() => {
        console.log(data)
        // setMovies(data)
        // setLoading(false)
        // setFirstLoad(false)
      }, 2000);
    })
    .catch(console.log)
  }

  return (
    <div className="Card" onClick={showDetails}>
      <div className="Title">
        <div>{props.movie.title}</div>
        <div className="year">{props.movie.year}</div>
      </div>
      <div className="Content">
        <img src={props.movie.poster} alt={props.movie.title}/>
      </div>
    </div>
  )

}

export default MovieCard