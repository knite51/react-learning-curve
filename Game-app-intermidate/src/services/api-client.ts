import axios, { AxiosRequestConfig } from "axios";
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

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<GenericResponse<T>>(this.endpoint, config).then(res => res.data);
  }

  getByID = (id?: number) => {
    const endpoint = id ? `${this.endpoint}/${id}` : this.endpoint
    return axiosInstance.get<T>(endpoint).then(res => res.data);
  }
}

export default APIClient;

