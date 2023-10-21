import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import { Game } from '../interface/app.interface';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';

interface CardProps {
  game: Game;
}

const GameCard = ({ game }: CardProps) => {
  return (
    <>
      <Card borderRadius={'10px'} overflow={'hidden'}>
        <Image src={game.background_image}></Image>
        <CardBody>
          <Heading fontSize={'2xl'}>{game.name}</Heading>
          <HStack justifyContent={'space-between'}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
