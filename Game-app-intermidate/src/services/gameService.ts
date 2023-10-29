
import { Game } from "../interface/api-interface";
import APIClient from "./api-client";


export default new APIClient<Game>('/games');