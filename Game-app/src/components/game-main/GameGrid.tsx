import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../../hooks/useGame';
import GameCard from './GameCard';
import GameSkeleton from './GameSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre, Platform } from '../../interface/app.interface';

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const {
    data: games,
    error,
    isLoading,
  } = useGames(selectedGenre, selectedPlatform);
  const skeletonArr = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        padding={'10px'}
      >
        {isLoading &&
          skeletonArr.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {!isLoading &&
          games.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard key={game.id} game={game}></GameCard>
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
