import Configs from '../Helpers/Configs'
import axios from 'axios';

const getMovies = (title) => {
  return axios
    .get(`${Configs.urlApi}/search/${title}`)
    .then(res => res.data)
}

export { getMovies }