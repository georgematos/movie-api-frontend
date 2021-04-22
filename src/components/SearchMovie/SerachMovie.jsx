import React, { useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import Loading from '../Loading/Loading'
import './SearchMovie.css'
import If from '../Helpers/If'
import NoMoviesFound from '../NoMoviesFound/NoMoviesFound'
import Configs from '../Helpers/Configs'

const SearchMovie = (props) => {

  const [title, setTitle] = useState("")
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [firstLoad, setFirstLoad] = useState(true)

  const searchMovie = () => {
    fetch(`${Configs.urlApi}/search?name=${title}`)
      .then(res => res.json())
      .then(setLoading(true))
      .then((data) => {
        setTimeout(() => {
          setMovies(data)
          setLoading(false)
          setFirstLoad(false)
        }, 2000);
      })
      .catch(console.log)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchMovie()
    }
  }

  return (
    <div>
      <div className="form-group row d-flex justify-content-center">
        <div className="col-xs-2">
          <input className="form-control" type="text" placeholder="Search your movies!" onChange={(e) => setTitle(e.target.value)} onKeyDown={handleKeyDown} />
        </div>
        <button className="btn btn-primary m-3 searchButton" onClick={searchMovie}>Search!</button>
      </div>
      <If test={loading}>
        <Loading></Loading>
      </If>
      <If test={movies}>
        <div className="Cards">
          {movies.map(m =>
            <div key={m.id}>
              <MovieCard title={m.title} year={m.year} poster={m.poster} />
            </div>
          )}
        </div>
      </If>
      <If test={movies.length < 1 && !firstLoad}>
        <NoMoviesFound></NoMoviesFound>
      </If>
    </div>
  )

}

export default SearchMovie