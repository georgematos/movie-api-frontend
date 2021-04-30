import React, { useState } from 'react'
import { useMainContext } from '../Context/MainAppContext'
import './Home.css'
import If from '../Helpers/If'
import MovieCard from '../MovieCard/MovieCard'
import Loading from '../Loading/Loading'
import NoMoviesFound from '../NoMoviesFound/NoMoviesFound'
import Configs from '../Helpers/Configs'

const Home = (props) => {

  const {movies, setMovies} = useMainContext()

  const [title, setTitle] = useState("")
  const [loading, setLoading] = useState(false)
  const [firstLoad, setFirstLoad] = useState(true)

  const searchMovie = () => {
    setMovies([])
    setFirstLoad(true)
    setLoading(true)
    fetch(`${Configs.urlApi}/search/${title}`)
      .then(res => res.json())
      .then((data) => {
        setMovies(data)
        setLoading(false)
        setFirstLoad(false)
      })
      .catch(console.log)
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
          className="form-control"
          type="text"
          placeholder="Search your movies!"
          onChange={(e) => setTitle(e.target.value)} onKeyDown={handleKeyDown}
        />
        <button className="btn btn-primary" onClick={searchMovie}>Search!</button>
      </div>
      <div>
        <If test={loading}>
          <Loading></Loading>
        </If>
        <If test={movies}>
          <div>
            <div className="Cards">
              {movies.map(m =>
                <div key={m.id}>
                  <MovieCard movie={m} />
                </div>
              )}
            </div>
          </div>
        </If>
        <If test={movies.length < 1 && !firstLoad}>
          <NoMoviesFound></NoMoviesFound>
        </If>
      </div>
    </div>
  )

}

export default Home