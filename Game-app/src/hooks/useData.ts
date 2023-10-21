import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";
import { AxiosRequestConfig } from 'axios';

interface FetchResponse<T> {
    count: number;
    results: T[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);

        apiClient.get<FetchResponse<T>>(endpoint, {
            signal: controller.signal, ...requestConfig
        })
            .then((res) => {
                setData(res.data.results);
                setIsLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setIsLoading(false);
            });
        return () => controller.abort();
    }, deps ? [...deps] : []);

    return { data, error, isLoading };
}

export default useData;