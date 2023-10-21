import { useEffect, useState } from 'react';
import { SimpleGrid, Text } from '@chakra-ui/react';
import { Game, GamesResponse } from '../interface/app.interface';
import useGames from '../hooks/useGame';
import GameCard from './GameCard';

const GameGrid = () => {
  const { games, error, setGames, setError } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={'10px'}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
