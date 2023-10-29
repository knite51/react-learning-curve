import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { CACHE_KEY_PLATFORM } from "../services/constants";
import platformService from "../services/platformService";
import { GenericResponse, Platform } from "../interface/api-interface";



const usePlatforms = () =>
  useQuery<GenericResponse<Platform>>({
    queryKey: CACHE_KEY_PLATFORM,
    queryFn: () => platformService.getAll({}),
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: { count: platforms.length, results: platforms, next: null }
  });

export default usePlatforms;
