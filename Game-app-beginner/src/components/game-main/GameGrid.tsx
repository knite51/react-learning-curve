import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../../hooks/useGame';
import GameCard from './GameCard';
import GameSkeleton from './GameSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../../interface/app.interface';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeletonArr = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
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
