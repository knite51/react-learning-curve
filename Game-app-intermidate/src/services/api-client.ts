import axios from "axios";
import { GenericResponse } from "../interface/api-interface";

export const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: { key: '884582f593234b8aa286642b16a30550' }
});


class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance.get<GenericResponse<T>>(this.endpoint).then(res => res.data);
  }

  getAllWithParams = (params: {
    genres: number | undefined,
    parent_platforms: number | undefined,
    ordering: string,
    search: string
  }) => {
    return axiosInstance.get<GenericResponse<T>>(this.endpoint, { params }).then(res => res.data);
  }
}

export default APIClient;

