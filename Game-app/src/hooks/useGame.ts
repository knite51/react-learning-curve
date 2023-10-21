import { useEffect, useState } from "react";

import apiClient, { CanceledError } from "../services/api-client";
import { Game, GamesResponse } from "../interface/app.interface";

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        apiClient.get<GamesResponse>('/games', {
            signal: controller.signal,
        })
            .then((res) => setGames(res.data.results))
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            });
        return () => controller.abort();
    }, []);

    return { games, error, setGames, setError };
}

export default useGames;