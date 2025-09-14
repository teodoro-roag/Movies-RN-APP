import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';
import { useQuery } from '@tanstack/react-query';

export const useMovies = () => {

  // Queris
  const nowPlayingQuery = useQuery({ 
    queryKey: ['movies', 'nowPlaying'], 
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });


  return {
    nowPlayingQuery
  };

}
