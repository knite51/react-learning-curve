import axios from "axios";
import { Post, PostQuery } from "../app.interface";
import { useQuery } from '@tanstack/react-query';

const usePosts = (query: PostQuery) =>
    useQuery<Post[], Error>({
        queryKey: ['posts', query], // anytime query changes, this runs
        queryFn: () => axios
            .get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _start: (query.page - 1) * query.pageSize,
                    _limit: query.pageSize
                }
            })
            .then((res) => res.data),
        staleTime: 1 * 60 * 1000, //1min
        keepPreviousData: true //prevent page jumping when you paginate and simply swap out data when its available
    });

export default usePosts;