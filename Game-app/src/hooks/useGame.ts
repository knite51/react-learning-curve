
import { Game, Genre } from "../interface/app.interface";
import useData from "./useData";

const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', { params: { genres: selectedGenre?.id } }, [selectedGenre?.id])

export default useGames;