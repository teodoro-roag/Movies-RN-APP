import { Movie } from '@/infrastructure/interfaces/movie.interface';
import { useRef } from 'react';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native';
import MoviePoster from './MoviePoster';


interface Props {
  title?: string;
  movies: Movie[];
  className?: string;

  loadNextPage?: () => void;
}

const MovieHorizontalList = ( { title, movies, className, loadNextPage }: Props ) => {


  const isLoading = useRef( false );

  const onScroll = ( event: NativeSyntheticEvent<NativeScrollEvent> ) => {
    // Evalua si ya se está cargando y no ejecutar otra acción
    if ( isLoading.current ) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    // Evalúa si se ha llegado al final del scroll con un margen de 600px
    const isEndReached = contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if ( !isEndReached ) return;

    isLoading.current = true;

    // TODO Aquí iría la lógica para cargar más películas
    console.log( 'Cargar más películas' );
    loadNextPage?.(); // Llama a la función para cargar la siguiente página si está definida
    
  };


  return (
    <View className={ `${ className }` }>
      { title && <Text className="text-3xl font-bold px-4 mb-2">{ title }</Text> }

      <FlatList
        horizontal
        data={ movies }
        showsHorizontalScrollIndicator={ false }
        keyExtractor={ ( item ) => `${ item.id }` }
        renderItem={ ( { item } ) => <MoviePoster id={ item.id } poster={ item.poster } smallPoster /> }
        onScroll={ onScroll }
      />
    </View>
  );
};

export default MovieHorizontalList;