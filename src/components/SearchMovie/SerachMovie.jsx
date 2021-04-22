import React, { useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './SearchMovie.css'

const SearchMovie = (props) => {

  const [title, setTitle] = useState("")
  const [movies, setMovies] = useState([])

  const searchMovie = () => {
    fetch(`http://localhost:8080/search?name=${title}`)
      .then(res => res.json())
      .then((data) => {
        setMovies(...Array(data))
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
      <div className="form-group row">
        <div className="col-xs-2">
          <input className="form-control" type="text" placeholder="Search your movies!" onChange={(e) => setTitle(e.target.value)} onKeyDown={handleKeyDown}/>
        </div>  
      </div>
      <button className="btn btn-primary" onClick={searchMovie}>Search!</button>
      <div className="Cards">
        {movies.map(m =>
        <div key={m.id}>
          <MovieCard title={m.title} year={m.year} poster={m.poster} />
        </div>
        )}
      </div>
    </div>
  )

}

export default SearchMovie