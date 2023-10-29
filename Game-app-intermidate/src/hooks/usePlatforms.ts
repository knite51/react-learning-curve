import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { CACHE_KEY_PLATFORM } from "../services/constants";
import platformService from "../services/platformService";
import { GenericResponse, Platform } from "../interface/api-interface";
import ms from 'ms'


const usePlatforms = () =>
  useQuery<GenericResponse<Platform>>({
    queryKey: CACHE_KEY_PLATFORM,
    queryFn: () => platformService.getAll({}),
    staleTime: ms('24h'),
    initialData: { count: platforms.length, results: platforms, next: null }
  });

export default usePlatforms;
