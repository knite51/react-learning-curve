export interface Game {
    id: string;
    name: string;
    background_image: string;
    metacritic: number;
    rating_top: number
    parent_platforms: {
        platform: Platform
    }[]
}

export interface Platform {
    id: number
    name: string;
    slug: string
}

export interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

export interface Sort {
    name: string;
    value: string;
}


export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sort: Sort | null;
    search: string | null;
}