import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from '../../interface/app.interface';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../../utils/image-url';

interface CardProps {
  game: Game;
}

const GameCard = ({ game }: CardProps) => {
  return (
    <>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <CardBody>
          <HStack justifyContent={'space-between'} marginBottom={1}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
          <Heading fontSize={'2xl'}>{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
