import axios from "axios";
import { Post, PostQuery } from "../app.interface";
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

const usePosts = (pageSize: number) =>
    useInfiniteQuery<Post[], Error>({
        queryKey: ['posts', pageSize], // anytime query changes, this runs
        queryFn: ({ pageParam = 1 }) => axios
            .get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _start: (pageParam - 1) * pageSize,
                    _limit: pageSize
                }
            })
            .then((res) => res.data),
        staleTime: 1 * 60 * 1000, //1min
        keepPreviousData: true, //prevent page jumping when you paginate and simply swap out data when its available
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0 ? allPages.length + 1 : undefined
        }
    });

export default usePosts;