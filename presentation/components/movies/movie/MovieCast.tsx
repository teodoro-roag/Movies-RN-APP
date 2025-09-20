import { Cast } from '@/infrastructure/interfaces/cast.interface';
import { FlatList, Text, View } from 'react-native';
import { ActorCard } from './ActorCard';

interface Props {
  cast: Cast[];
}

export const MovieCast = ({ cast }: Props) => {
  return (
    <View className="mt-5 mb-50">
      <Text className="text-2xl font-bold px-5">Reparto</Text>
      <FlatList 
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        className="mt-5 mb-10"
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ActorCard actor={item} />
        }
      />
    </View>
  );
};