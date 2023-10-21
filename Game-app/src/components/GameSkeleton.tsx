import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameSkeleton = () => {
  return (
    <>
      <Card width={'260px'} borderRadius={'10px'} overflow={'hidden'}>
        <Skeleton height={'200px'}> </Skeleton>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Card>
    </>
  );
};

export default GameSkeleton;
