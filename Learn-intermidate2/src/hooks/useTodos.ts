import axios from "axios";
import { Todo } from "../app.interface";
import { useQuery } from '@tanstack/react-query';

const useTodos = () => {
    const fetchTodos = () => axios
        .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.data);

    return useQuery<Todo[], Error>({
        queryKey: ['todos'],
        queryFn: fetchTodos,
    });
}

export default useTodos;