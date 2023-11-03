import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import { Game, GenericResponse } from '../interface/api-interface';
import { CACHE_KEY_GAMES } from '../services/constants';
import gameService from '../services/gameService';
import useGameQueryStore from '../store';

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<GenericResponse<Game>, Error>({
    queryKey: [...CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll({
        params: {
          genres: gameQuery.genreID,
          parent_platforms: gameQuery.platformID,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
          pageSize: gameQuery.pageSize,
        },
      }),
    staleTime: ms('24h'),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    }, // allpages are fetched paginated pages stored game[][]
  });
};

export default useGames;
