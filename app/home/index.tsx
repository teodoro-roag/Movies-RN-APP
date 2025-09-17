import MainSlideShow from '@/presentation/components/movies/MainSlideShow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';
import { useMovies } from '@/presentation/hooks/useMovies';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
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
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>

        {/* Carrousel de imágenes */}
        <MainSlideShow movies={nowPlayingQuery.data ?? []} />

        {/* Peliculas populares */}
        <MovieHorizontalList 
          title="Populares" 
          movies={popularQuery.data ?? []} 
          className="mb-4"
        />

        {/* Peliculas mejor valoradas */}
        <MovieHorizontalList 
          title="Mejor Valoradas" 
          movies={topRatedQuery.data ?? []} 
          className="mb-4"
        />

        {/* Peliculas Próximamente */}
        <MovieHorizontalList 
          title="Próximamente" 
          movies={upComingQuery.data ?? []} 
          className="mb-4"
        />
        
      </View>
    </ScrollView>
  )
};

export default HomeScreen;