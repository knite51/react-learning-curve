
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENERES } from "../services/constants";
import genreService from "../services/genreService";
import genres from "../data/genres";


// data: genres, isLoading: false, error: null
const useGenres = () => {
  return useQuery({
    queryKey: CACHE_KEY_GENERES,
    queryFn: genreService.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: { count: genres.length, results: genres }
  });
}

export default useGenres;