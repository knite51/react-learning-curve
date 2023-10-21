export interface Game {
    id: string;
    name: string;
    background_image: string;
    metacritic: number;
    parent_platforms: {
        platform: Platform
    }[]
}

export interface Platform {
    id: string
    name: string;
    slug: string
}

export interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}