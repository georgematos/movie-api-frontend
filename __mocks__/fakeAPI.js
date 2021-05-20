const movies = [
  {
    "id": "tt0076759",
    "title": "Star Wars: Episode IV - A New Hope",
    "year": "1977",
    "poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    "id": "tt0086190",
    "title": "Star Wars: Episode VI - Return of the Jedi",
    "year": "1983",
    "poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    "id": "tt2488496",
    "title": "Star Wars: Episode VII - The Force Awakens",
    "year": "2015",
    "poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
  },
]

const movie = {
  "id": "tt0076759",
  "title": "Star Wars: Episode IV - A New Hope",
  "year": "1977",
  "poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
}

const getMovie = id => {
  return new Promise((resolve, reject) => {
    resolve({ data: movie })
  })
}

const getMovies = title => {
  return new Promise((resolve, reject) => {
    resolve({ data: movies })
  })
}

export { getMovie, getMovies }