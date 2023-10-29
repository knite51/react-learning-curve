import useGenres from "./useGenres";

const useGenre = (id: number = 0) => {
    const { data: genres } = useGenres();
    return genres.results.find((p: any) => p.id === id)
}

export default useGenre