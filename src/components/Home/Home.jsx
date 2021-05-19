import React, { useState } from 'react'
import { useMainContext } from '../Context/MainAppContext'
import './Home.css'
import If from '../../Helpers/If'
import DisplayCards from '../DisplayCards/DisplayCards'
import Loading from '../Loading/Loading'
import NoMoviesFound from '../NoMoviesFound/NoMoviesFound'
import { getMovies } from '../../services/movieService'

const Home = () => {

  const { movies, setMovies } = useMainContext()

  const [title, setTitle] = useState("")
  const [loading, setLoading] = useState(false)
  const [firstLoad, setFirstLoad] = useState(true)

  const searchMovie = () => {
    setMovies([])
    setFirstLoad(true)
    setLoading(true)
    getMovies(title)
      .then((data) => {
        setMovies(data)
        setLoading(false)
        setFirstLoad(false)
      })
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchMovie()
    }
  }

  return (
    <div className="container home">
      <div className="input-group form">
        <input
          id="homeSearchBar"
          role="search"
          className="form-control"
          type="text"
          placeholder="Search your movies!"
          onChange={(e) => setTitle(e.target.value)} onKeyDown={handleKeyDown}
        />
        <button id="homeSearchButton" className="btn btn-primary" onClick={searchMovie}>Search!</button>
      </div>
      <div>
        <If test={loading}>
          <Loading></Loading>
        </If>
        <If test={movies}>
          <DisplayCards movies={movies} />
        </If>
        <If test={movies.length < 1 && !firstLoad}>
          <NoMoviesFound></NoMoviesFound>
        </If>
      </div>
    </div>
  )

}

export default Home