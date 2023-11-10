import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { GenericResponse, Trailer } from '../interface/api-interface';
import ms from 'ms';

const useGameTrailer = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery<GenericResponse<Trailer>>({
    queryKey: ['trailers', gameId],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
  });
};

export default useGameTrailer;
