import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormEvent, useRef } from 'react';
import { Todo } from '../app.interface';
import axios from 'axios';

const TodoForm = () => {
  const queryClient = useQueryClient();

  const addTodo = useMutation<Todo, Error, Todo>({
    //Types are 1 from backend, 2 error type, 3 data sent to backend
    //
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
        .then((res) => res.data),
    onSuccess: (savedTodo, newTodo) => {
      //savedTodo is the data returned from backend //newTodo is the data sent to backend
      // Approach one invalidating cache using queryClient
      // queryClient.invalidateQueries({
      //   queryKey: ['todos'], //invalidates all queries whose key start with todo
      // });

      // Approach Two Updating the data in cache
      queryClient.setQueryData<Todo[]>(['todos'], (todos) => [
        savedTodo,
        ...(todos || []),
      ]);

      ref.current ? (ref.current.value = '') : null;
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

export default TodoForm;
