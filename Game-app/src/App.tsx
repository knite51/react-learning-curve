import './App.css';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/core/Navbar';
import GameGrid from './components/game-main/GameGrid';
import GenreList from './components/game-sidebar/GenreList';
import { useState } from 'react';
import { Genre } from './interface/app.interface';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
          <GameGrid selectedGenre={selectedGenre}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
