import { Text, View } from 'react-native';

import "../global.css";

const RootLayout = () => {


  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold text-blue-500">
        Root Layout
      </Text>
    </View>
  )
}

export default RootLayout