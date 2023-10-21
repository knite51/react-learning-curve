import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenre from '../../hooks/useGenre';
import getCroppedImageUrl from '../../utils/image-url';
import { Genre } from '../../interface/app.interface';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
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
              <Button
                variant={'link'}
                fontSize={'lg'}
                onClick={() => onSelectGenre(genre)}
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
