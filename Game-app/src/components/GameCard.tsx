import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Game } from '../interface/app.interface';

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
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
