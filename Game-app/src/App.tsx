import './App.css';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/core/Navbar';
import GameGrid from './components/game-main/GameGrid';
import GenreList from './components/game-sidebar/GenreList';
import { useState } from 'react';
import { Genre, Platform } from './interface/app.interface';
import PlatformSelector from './components/game-main/PlatformSelector';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

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
              onSelectGenre={(genre) => setSelectedGenre(genre)}
              selectedGenre={selectedGenre}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            selectedPlatform={selectedPlatform}
          ></PlatformSelector>
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          ></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
