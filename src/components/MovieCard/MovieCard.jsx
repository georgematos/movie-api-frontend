import React, { useState } from 'react'
import './MovieCard.css'
import Configs from '../../Helpers/Configs'
import { useHistory } from 'react-router-dom'
import Loading from '../Loading/Loading'
import If from '../../Helpers/If'
import { getMovieDetails } from '../../services/movieService'

const MovieCard = (props) => {

  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const showDetails = () => {
    setLoading(true)
    getMovieDetails(props.movie.id)
      .then((data) => {
        setLoading(false)
        history.push('/movie-details', {movie: data})
      })
      .catch(console.log)
  }

  return (
    <div className="Card" role="card" onClick={showDetails}>
      <div className="Title" data-testid={props.movie.id}>
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