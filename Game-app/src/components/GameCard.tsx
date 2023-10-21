import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import { Game } from '../interface/app.interface';
import PlatformIconList from './PlatformIconList';

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
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
