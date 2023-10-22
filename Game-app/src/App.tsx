import './App.css';
import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import Navbar from './components/core/Navbar';
import GameGrid from './components/game-main/GameGrid';
import GenreList from './components/game-sidebar/GenreList';
import { useState } from 'react';
import { GameQuery } from './interface/app.interface';
import PlatformSelector from './components/game-main/filter-sort-search/PlatformSelector';
import SortSelector from './components/game-main/filter-sort-search/SortSelector';
import GameHeading from './components/game-main/GameHeading';

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
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, search: searchText })
            }
          ></Navbar>
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
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery}></GameHeading>
            <HStack spacing={'16px'} marginBottom={5} flexWrap="wrap">
              <PlatformSelector
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform: platform })
                }
                selectedPlatform={gameQuery.platform}
              ></PlatformSelector>
              <SortSelector
                onSelectSort={(sort) =>
                  setGameQuery({ ...gameQuery, sort: sort })
                }
                selectedSort={gameQuery.sort}
              ></SortSelector>
            </HStack>
            <GameGrid gameQuery={gameQuery}></GameGrid>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
