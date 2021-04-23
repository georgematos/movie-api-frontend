import React, { useState } from 'react'
import './Home.css'
import If from '../Helpers/If'
import MovieCard from '../MovieCard/MovieCard'
import Loading from '../Loading/Loading'
import NoMoviesFound from '../NoMoviesFound/NoMoviesFound'
import Configs from '../Helpers/Configs'

const Home = (props) => {

  const [title, setTitle] = useState("")
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [firstLoad, setFirstLoad] = useState(true)

  const searchMovie = () => {
    setMovies([])
    setFirstLoad(true)
    setLoading(true)
    fetch(`${Configs.urlApi}/search?name=${title}`)
      .then(res => res.json())
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
    <div className="container home">
      <div className="input-group form">
        <input 
          className="form-control" 
          type="text"
          placeholder="Search your movies!"
          onChange={(e) => setTitle(e.target.value)}onKeyDown={handleKeyDown} 
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
      <If test={movies.length < 1 && !loading}>
        <div className="initial-page">
          <h2>Welcome</h2>
        </div>
      </If>
    </div>
  )

}

export default Home