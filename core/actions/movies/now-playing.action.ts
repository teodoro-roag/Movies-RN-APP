import { movieApi } from '@/core/api/movie-api';

// Acción para obtener las películas que están en cartelera actualmente.
export const nowPlayingAction = async () => {
  
  try{

    const { data } = await movieApi.get('/now_playing');
    console.log(JSON.stringify(data, null, 2));

    return [];

  } catch(error) {
    console.log(error)
    throw 'Cannot load now playing movies';
  }
  
}