import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { Game } from '../interface/api-interface';
import gameService from '../services/gameService';

const useGame = (slug: string) => {
  return useQuery<Game>({
    queryKey: ['games', slug],
    queryFn: () => gameService.getByIDSlug(slug),
    staleTime: ms('24h'),
  });
};

export default useGame;
