import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import {
  Image,
  Pressable,
  Text,
  useWindowDimensions,
  View
} from 'react-native';

interface Props {
  poster: string;
  originalTitle: string;
  title: string;
}


const MovieHeader = ( { poster, originalTitle, title }: Props) => {

  const { height:screenHeight } = useWindowDimensions();

  return (
    <>
      {/* Gradiante */}
      <LinearGradient 
        colors={['rgba(0,0,0,0.3)', 'transparent']}
        start={{ x: 0, y: 0 }}
        style= {{
          height: screenHeight * 0.4,
          position: 'absolute',
          zIndex: 1,
          width: '100%'
         }}
      />

      {/* Botón de regreso */}
      <View style = {{
        position: 'absolute',
        zIndex: 99,
        elevation: 9,
        top: 35,
        left: 10
      }}>
        <Pressable
          onPress={() => router.dismiss() }
        >
          <Ionicons 
            name="arrow-back" 
            size={30} 
            color="white" 
            className="shadow"
            />
          </Pressable>
      </View>
      <View
        style = {{ height: screenHeight * 0.7 }}
        className="shadow-xl shadow-black/20">

          <View className= "flex-1 rounded-b-[25px] overflow-hidden">
            <Image
              source={{ uri: poster }}
              resizeMode="cover"
              className="flex-1"
            />

          </View>

          <View className="mt-5 px-5">
            <Text className="font-normal opacity-70">{originalTitle}</Text>
            <Text className="font-semibold text-2xl">{title}</Text>
          </View>

      </View>
    </>
  )
}

export default MovieHeader