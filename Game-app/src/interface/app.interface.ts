export interface Game {
    id: string;
    name: string;
    background_image: string;
    parent_platforms: {
        platform: Platform
    }[]
}

export interface Platform {
    id: string
    name: string;
    slug: string
}

export interface GamesResponse {
    count: number;
    results: Game[];
}