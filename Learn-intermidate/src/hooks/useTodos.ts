import { useQuery } from '@tanstack/react-query';
import { Todo } from "../app.interface";
import { CACHE_KEY_TODOS } from "../react-query/constants";
import APIClient from "../react-query/services/apiClient";


const apiClient = new APIClient<Todo>('/todos');

const useTodos = () => {


    return useQuery<Todo[], Error>({
        queryKey: CACHE_KEY_TODOS,
        queryFn: apiClient.getAll,
        staleTime: 10 * 1000 //10s
    });
}

export default useTodos;