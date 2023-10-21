
import { Game } from "../interface/app.interface";
import useData from "./useData";

const useGames = () => useData<Game>('/games')

export default useGames;