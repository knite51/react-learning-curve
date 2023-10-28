import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormEvent, useRef } from 'react';
import { Todo } from '../app.interface';
import axios from 'axios';

interface AddTodoContext {
  prevTodos: Todo[] | undefined;
}

const TodoFormOptimisticUpdate = () => {
  const queryClient = useQueryClient();

  const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
    //Types are 1 from backend, 2 error type, 3 data sent to backend
    // Variables types in react query are input data
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
        .then((res) => res.data),
    onMutate: (newTodoInput: Todo) => {
      const prevTodos = queryClient.getQueryData<Todo[]>(['todos']);
      queryClient.setQueryData<Todo[]>(['todos'], (todos) => [
        newTodoInput,
        ...(todos || []),
      ]);
      ref.current ? (ref.current.value = '') : null;

      return { prevTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(['todos'], (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },
    onError: (error, newTodoInput, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(['todos'], context.prevTodos);
    },
  });
  const ref = useRef<HTMLInputElement>(null);

  const handleAddTodoMutation = (event: FormEvent) => {
    event.preventDefault();
    if (ref.current && ref.current.value) {
      addTodo.mutate({
        id: 0,
        title: ref.current?.value,
        completed: false,
        userId: 1,
      });
    }
  };

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <form
        className="row mb-3"
        onSubmit={(event) => handleAddTodoMutation(event)}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button className="btn btn-primary" disabled={addTodo.isLoading}>
            {addTodo.isLoading ? 'Adding' : 'Add'}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoFormOptimisticUpdate;
