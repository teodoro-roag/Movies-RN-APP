import { Text, View } from 'react-native';

import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';
import "../global.css";

const RootLayout = () => {

  nowPlayingAction();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold text-blue-500">
        Root Layout
      </Text>
    </View>
  )
}

export default RootLayout