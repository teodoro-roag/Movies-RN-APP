import { useMovie } from '@/presentation/hooks/useMovie';
import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

const movieScreen = () => {

  const { id } = useLocalSearchParams();

  const { movieQuery } = useMovie(+id);

  if (movieQuery.isLoading || !movieQuery.data) {{
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl mb-5">Cargando película...</Text>
        <ActivityIndicator size={50} color="purple" />

      </View>
    )

  }}

  return (
    <ScrollView>
      <Text>
        { movieQuery.data?.title ?? 'No tiene título' }
      </Text>
    </ScrollView>
  )

}

export default movieScreen;