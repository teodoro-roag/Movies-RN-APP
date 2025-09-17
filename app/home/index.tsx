import MainSlideShow from '@/presentation/components/movies/MainSlideShow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';
import { useMovies } from '@/presentation/hooks/useMovies';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {


  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery } = useMovies();


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
    </View>
  )
};

export default HomeScreen;