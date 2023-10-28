import axios from "axios";
import { Todo } from "../app.interface";
import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_TODOS } from "../react-query/constants";

const useTodos = () => {
    const fetchTodos = () => axios
        .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.data);

    return useQuery<Todo[], Error>({
        queryKey: CACHE_KEY_TODOS,
        queryFn: fetchTodos,
        staleTime: 10 * 1000 //10s
    });
}

export default useTodos;