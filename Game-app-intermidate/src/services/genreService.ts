
import { Genre } from "../interface/api-interface";
import APIClient from "./api-client";


export default new APIClient<Genre>('/genres');