import { movieApi } from '@/core/api/movie-api';
import { MovieDBMoviesResponse } from '@/infrastructure/interfaces/moviedb-responses';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

// Acción para obtener las películas que están en cartelera actualmente.
export const nowPlayingAction = async () => {
  
  try{

    const { data } = await movieApi.get<MovieDBMoviesResponse>('/now_playing');

    // Mapear los resultados de la API a la estructura interna de Movie.
    const movies = data.results.map( MovieMapper.fromTheMovieDBToMovie )
    
    return movies;

  } catch(error) {
    console.log(error)
    throw 'Cannot load now playing movies';
  }
  
}