import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';
import { popularMoviesAction } from '@/core/actions/movies/popular.action';
import { topRatedMoviesAction } from '@/core/actions/movies/top-rated.action';
import { upComingMoviesAction } from '@/core/actions/movies/upcoming.action';
import { useQuery } from '@tanstack/react-query';

export const useMovies = () => {

  // Queris
  const nowPlayingQuery = useQuery({ 
    queryKey: ['movies', 'nowPlaying'], 
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  // Query para películas populares
  const popularQuery = useQuery({ 
    queryKey: ['movies', 'popular'], 
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  // Query para películas mejor valoradas
  const topRatedQuery = useQuery({ 
    queryKey: ['movies', 'topRated'], 
    queryFn: topRatedMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

   // Query para películas en cartelera próximamente
  const upComingQuery = useQuery({ 
    queryKey: ['movies', 'upComing'], 
    queryFn: upComingMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upComingQuery
  };

}
