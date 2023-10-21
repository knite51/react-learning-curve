import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenre from '../../hooks/useGenre';
import getCroppedImageUrl from '../../utils/image-url';

const GenreList = () => {
  const { data: genres } = useGenre();

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
