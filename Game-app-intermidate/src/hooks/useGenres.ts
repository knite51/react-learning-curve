
import { useQuery } from "@tanstack/react-query";
import { GenericResponse, Genre } from "../interface/api-interface";
import { CACHE_KEY_GENERES } from "../services/constants";
import genreService from "../services/genreService";
import genres from "../data/genres";


const useGenres = () =>
  useQuery<GenericResponse<Genre>>({
    queryKey: CACHE_KEY_GENERES,
    queryFn: genreService.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: { count: genres.length, results: genres, next: null }
  });


export default useGenres;