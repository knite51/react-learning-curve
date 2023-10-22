import './App.css';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/core/Navbar';
import GameGrid from './components/game-main/GameGrid';
import GenreList from './components/game-sidebar/GenreList';
import { useState } from 'react';
import { GameQuery } from './interface/app.interface';
import PlatformSelector from './components/game-main/PlatformSelector';

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr', // aside is 200px main take all available space
        }}
      >
        <GridItem area="nav">
          <Navbar></Navbar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              onSelectGenre={(genre) =>
                setGameQuery({ ...gameQuery, genre: genre })
              }
              selectedGenre={gameQuery.genre}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform: platform })
            }
            selectedPlatform={gameQuery.platform}
          ></PlatformSelector>
          <GameGrid
            selectedGenre={gameQuery.genre}
            selectedPlatform={gameQuery.platform}
          ></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
