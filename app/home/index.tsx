import MainSlideShow from '@/presentation/components/movies/MainSlideShow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';
import { useMovies } from '@/presentation/hooks/useMovies';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {


  const safeArea = useSafeAreaInsets();

  // Custom hook para obtener las películas
  const { 
    nowPlayingQuery, 
    popularQuery, 
    topRatedQuery, 
    upComingQuery 
  } = useMovies();


  if ( nowPlayingQuery.isLoading ) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="purple" />
      </View>
    );
  }


  return (
    <View className="mt-2" style={{ paddingTop: safeArea.top }}>
      <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>

      {/* Carrousel de imágenes */}
      <MainSlideShow movies={nowPlayingQuery.data ?? []} />

      {/* Peliculas populares */}
      <MovieHorizontalList title="Populares" movies={popularQuery.data ?? []} />

      {/* Peliculas mejor valoradas */}
      <MovieHorizontalList title="Mejor Valoradas" movies={topRatedQuery.data ?? []} />

      {/* Peliculas Próximamente */}
      <MovieHorizontalList title="Próximamente" movies={upComingQuery.data ?? []} />
    </View>
  )
};

export default HomeScreen;