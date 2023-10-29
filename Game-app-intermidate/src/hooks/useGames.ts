import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Game, GenericResponse } from "../interface/api-interface";
import { CACHE_KEY_GAMES } from "../services/constants";
import gameService from "../services/gameService";



const useGames = (gameQuery: GameQuery) =>
  useQuery<GenericResponse<Game>, Error>({
    queryKey: [...CACHE_KEY_GAMES, gameQuery.genre?.name, gameQuery.platform?.name, gameQuery.sortOrder, gameQuery.searchText],
    queryFn: () => gameService.getAllWithParams({
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }),
    staleTime: 1 * 10 * 60 * 1000 //10mins
  })

export default useGames;
