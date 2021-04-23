import React, { useState } from 'react'
import './MovieCard.css'
import Configs from '../Helpers/Configs'
import { useHistory } from 'react-router-dom'
import Loading from '../Loading/Loading'
import If from '../Helpers/If'

const MovieCard = (props) => {

  const [loading, setLoading] = useState(false)
  const history = useHistory()


  const showDetails = () => {
    setLoading(true)
    fetch(`${Configs.urlApi}/movie?id=${props.movie.id}`)
      .then(res => res.json())
      .then((data) => {
        setTimeout(() => {
          setLoading(false)
          history.push('/movie-details', {movie: data})
        }, 1000);
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
        <If test={loading}>
          <div className="loading-movie">
            <Loading></Loading>
          </div>
        </If>
        <If test={!loading}>
          <img src={props.movie.poster} alt={props.movie.title} />
        </If>
      </div>
    </div>
  )

}

export default MovieCard