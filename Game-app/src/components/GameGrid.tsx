import { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';
import { Game, GamesResponse } from '../interface/app.interface';
import useGames from '../hooks/useGame';

const GameGrid = () => {
  const { games, error, setGames, setError } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
