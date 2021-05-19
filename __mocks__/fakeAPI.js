import movies from './testData'

const getMovies = title => {
  return new Promise((resolve, reject) => {
    const moviesData = movies.filter(m => _stringContainsCaseInsensitive(title, m.title))
    resolve({data: moviesData})
  })
}

function _stringContainsCaseInsensitive(search, subject) {
  return subject.toLowerCase().includes(search.toLowerCase());
}

export { getMovies }