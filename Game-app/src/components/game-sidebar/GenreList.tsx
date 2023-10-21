import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenre from '../../hooks/useGenre';
import getCroppedImageUrl from '../../utils/image-url';

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenre();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY={'5px'}>
            <HStack>
              <Image
                boxSize={'32px'}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Text fontSize={'lg'}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
