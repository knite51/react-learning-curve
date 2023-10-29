import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { CACHE_KEY_PLATFORM } from "../services/constants";
import platformService from "../services/platformService";



const usePlatforms = () =>
  useQuery({
    queryKey: CACHE_KEY_PLATFORM,
    queryFn: platformService.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: { count: platforms.length, results: platforms }
  });

export default usePlatforms;
