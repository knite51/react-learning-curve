export interface Game {
    id: string;
    name: string;
}

export interface GamesResponse {
    count: number;
    results: Game[];
}