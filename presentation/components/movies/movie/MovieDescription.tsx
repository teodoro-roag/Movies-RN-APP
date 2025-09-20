import { Formatter } from '@/config/helpers.tsx/formatter';
import { CompleteMovie } from '@/infrastructure/interfaces/movie.interface';
import { Text, View } from 'react-native';

interface Props {
  movie: CompleteMovie;
}


const MovieDescription = ({ movie }: Props) => {
  return (
    <View className="mx-5">
      <View className="flex flex-row">
        <Text> { movie.rating } </Text>
        <Text> - { movie.genres.join(', ') }</Text>
      </View>

      <Text className="font-bold mt-5 text-xl">Historia</Text>
      <Text className="mt-2 font-normal"> {movie.description} </Text>

      <Text className="font-bold mt-2 text-2xl">{  Formatter.currency(movie.budget)}</Text>
       
    </View>
  )
}

export default MovieDescription