
import { Platform } from "../interface/api-interface";
import APIClient from "./api-client";


export default new APIClient<Platform>('/platforms/lists/parents');