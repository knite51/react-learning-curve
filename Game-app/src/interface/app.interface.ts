export interface Game {
    id: string;
    name: string;
    background_image: string
}

export interface GamesResponse {
    count: number;
    results: Game[];
}