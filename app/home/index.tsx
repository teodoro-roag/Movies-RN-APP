import { useMovies } from '@/presentation/hooks/useMovies';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

const HomeScreen = () => {

  const { nowPlayingQuery } = useMovies();


  if ( nowPlayingQuery.isLoading ) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="purple" />
      </View>
    );
  }


  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
};

export default HomeScreen;