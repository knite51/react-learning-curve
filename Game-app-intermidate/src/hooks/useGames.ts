import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Game, GenericResponse } from "../interface/api-interface";
import { CACHE_KEY_GAMES } from "../services/constants";
import gameService from "../services/gameService";



const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<GenericResponse<Game>, Error>({
    queryKey: [...CACHE_KEY_GAMES, gameQuery.genre?.name, gameQuery.platform?.name, gameQuery.sortOrder, gameQuery.searchText],
    queryFn: ({ pageParam = 1 }) => gameService.getAll({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
        pageSize: gameQuery.pageSize
      }
    }),
    staleTime: 1 * 10 * 60 * 1000,//10mins
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    } // allpages are fetched paginated pages stored game[][]
  })

export default useGames;
