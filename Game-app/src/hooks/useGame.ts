
import { Game, GameQuery, } from "../interface/app.interface";
import useData from "./useData";

const useGames = (gameQuery: GameQuery) => useData<Game>('/games',
    {
        params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.sort?.value,
            search: gameQuery.search
        }
    }, [gameQuery])

export default useGames;