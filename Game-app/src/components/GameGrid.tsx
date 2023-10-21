import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGame';
import GameCard from './GameCard';
import GameSkeleton from './GameSkeleton';

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletonArr = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {/* GameSkeleton */}
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={'10px'}
      >
        {isLoading &&
          skeletonArr.map((skeleton) => <GameSkeleton key={skeleton} />)}
        {!isLoading &&
          games.map((game) => <GameCard key={game.id} game={game}></GameCard>)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
