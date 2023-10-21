
import { Platform } from "../interface/app.interface";
import useData from "./useData";

const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

export default usePlatforms;