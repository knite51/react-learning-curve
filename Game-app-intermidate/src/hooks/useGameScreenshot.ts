import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { GenericResponse, Screenshot } from '../interface/api-interface';
import ms from 'ms';

const useGameScreenshot = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery<GenericResponse<Screenshot>>({
    queryKey: ['screenshots', gameId],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
  });
};

export default useGameScreenshot;
