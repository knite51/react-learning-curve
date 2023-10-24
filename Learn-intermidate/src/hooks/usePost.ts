import axios from "axios";
import { Post } from "../app.interface";
import { useQuery } from '@tanstack/react-query';

const usePosts = () => {
    const fetchPosts = () => axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.data)

    return useQuery<Post[], Error>({
        queryKey: ['posts'],
        queryFn: fetchPosts,
        staleTime: 1 * 60 * 1000 //1min
    });
}

export default usePosts;