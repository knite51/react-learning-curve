import { Genre } from "../interface/app.interface";
import useData from "./useData";

const useGenre = () => useData<Genre>('/genres')

export default useGenre;