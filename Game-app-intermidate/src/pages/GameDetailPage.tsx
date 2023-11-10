import { GridItem, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameTrailers from '../components/GameTrailers';
import useGame from '../hooks/useGame';
import GameScreenshot from '../components/GameScreenshot';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); //By appending ! means you telling typescript it can never be null/undefined

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game}></GameAttributes>
      </GridItem>
      <GridItem>
        <GameTrailers gameId={game.id}></GameTrailers>
        <GameScreenshot gameId={game.id}></GameScreenshot>
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
