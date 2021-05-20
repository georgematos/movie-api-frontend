import Configs from '../Helpers/Configs'
import axios from 'axios';

const getMovies = async (title) => {
  const res = await axios
    .get(`${Configs.urlApi}/search/${title}`);
  return res.data;
}

const getMovieDetails = async (movieId) => {
  const res = await axios
    .get(`${Configs.urlApi}/${movieId}`);
  return res.data;
}

export { getMovies, getMovieDetails }