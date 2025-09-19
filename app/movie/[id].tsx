import { getMovieByIdAction } from '@/core/actions/movie/get-movie-by-id.action';
import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const movieScreen = () => {

  const { id } = useLocalSearchParams();
   
  getMovieByIdAction(+id);

  return (
    <View>
      <Text>movieScreen</Text>
    </View>
  )
}

export default movieScreen