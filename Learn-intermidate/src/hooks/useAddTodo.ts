import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddTodoContext, Todo } from "../app.interface";
import { CACHE_KEY_TODOS } from "../react-query/constants";
import todoService from "../react-query/services/todoService";


const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();

    return useMutation<Todo, Error, Todo, AddTodoContext>({
        mutationFn: (todo: Todo) => todoService.postData(todo),
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