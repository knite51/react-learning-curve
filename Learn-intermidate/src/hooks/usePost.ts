import axios from "axios";
import { Post } from "../app.interface";
import { useQuery } from '@tanstack/react-query';

const usePosts = (userId: number | undefined) =>
    useQuery<Post[], Error>({
        queryKey: userId ? ['posts', 'users', userId] : ['posts'],
        queryFn: () => axios
            .get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    userId
                }
            })
            .then((res) => res.data),
        staleTime: 1 * 60 * 1000 //1min
    });

export default usePosts;