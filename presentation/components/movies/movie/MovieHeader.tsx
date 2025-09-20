import { Image, Text, useWindowDimensions, View } from 'react-native';

interface Props {
  poster: string;
  originalTitle: string;
  title: string;
}


const MovieHeader = ( { poster, originalTitle, title }: Props) => {

  const { height:screenHeight } = useWindowDimensions();

  return (
    <>
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