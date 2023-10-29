
import { useQuery } from "@tanstack/react-query";
import { GenericResponse, Genre } from "../interface/api-interface";
import { CACHE_KEY_GENERES } from "../services/constants";
import genreService from "../services/genreService";
import genres from "../data/genres";
import ms from 'ms'


const useGenres = () =>
  useQuery<GenericResponse<Genre>>({
    queryKey: CACHE_KEY_GENERES,
    queryFn: genreService.getAll,
    staleTime: ms('24h'),
    initialData: { count: genres.length, results: genres, next: null }
  });


export default useGenres;