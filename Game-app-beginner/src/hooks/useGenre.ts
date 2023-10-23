import genres from "../data/genres";

const useGenre = () => ({ data: genres, isLoading: false, error: '' });

export default useGenre;