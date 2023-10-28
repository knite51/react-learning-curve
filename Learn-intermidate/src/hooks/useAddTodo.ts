import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddTodoContext, Todo } from "../app.interface";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../react-query/constants";

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();

    return useMutation<Todo, Error, Todo, AddTodoContext>({
        mutationFn: (todo: Todo) =>
            axios
                .post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
                .then((res) => res.data),
        onMutate: (newTodoInput: Todo) => {
            const prevTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => [
                newTodoInput,
                ...(todos || []),
            ]);

            onAdd();

            return { prevTodos };
        },
        onSuccess: (savedTodo, newTodo) => {
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
                todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
            );
        },
        onError: (error, newTodoInput, context) => {
            if (!context) return;
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.prevTodos);
        },
    });
}

export default useAddTodo;