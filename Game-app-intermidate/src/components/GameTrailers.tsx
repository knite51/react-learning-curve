import useGameTrailer from '../hooks/useGameTrailer';

interface Props {
  gameId: number;
}

const GameTrailers = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameTrailer(gameId);
  if (isLoading) return null;
  if (error) throw error;
  const first = data?.results[0];
  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailers;