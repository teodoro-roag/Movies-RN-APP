import { Movie } from '@/infrastructure/interfaces/movie.interface';
import React, { useRef } from 'react';
import { Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

interface Props {
  movies: Movie[];
}
  
const MainSlideShow = ({ movies }: Props) => {

  const ref = useRef(null);

  return (
    <View className="h-[250px] w-full">
      <Carousel 
        ref = { ref }
        data = { movies }
        renderItem = { ({ item }) => ( <Text>{ item.title }</Text> ) }
        width = { 150 + 50 }
        height = { 350 }
      />
    </View>
  )
}

export default MainSlideShow