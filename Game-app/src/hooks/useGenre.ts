import { useEffect, useState } from "react";

import apiClient, { CanceledError } from "../services/api-client";
import { Genre, GenreResponse } from "../interface/app.interface";

const useGenre = () => {
    const [genre, setGenre] = useState<Genre[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);

        apiClient.get<GenreResponse>('/genres', {
            signal: controller.signal,
        })
            .then((res) => {
                setGenre(res.data.results);
                setIsLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setIsLoading(false);
            });
        return () => controller.abort();
    }, []);

    return { genres: genre, error, isLoading };
}

export default useGenre;