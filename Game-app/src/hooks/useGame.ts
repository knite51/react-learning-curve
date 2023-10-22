
import { Game, Genre, Platform, Sort } from "../interface/app.interface";
import useData from "./useData";

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null, selectedSort: Sort | null) => useData<Game>('/games',
    {
        params: {
            genres: selectedGenre?.id,
            platforms: selectedPlatform?.id,
            ordering: selectedSort?.value
        }
    }, [selectedGenre?.id, selectedPlatform?.id, selectedSort?.value])

export default useGames;