import { ReactNode, useReducer } from 'react';
import TasksContext from './tasksContext';

export interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: 'ADD';
  task: Task;
}

interface DeleteTask {
  type: 'DELETE';
  taskID: number;
}

export type TaskAction = AddTask | DeleteTask;

const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
  if (action.type === 'ADD') return [...tasks, action.task];
  if (action.type === 'DELETE')
    return tasks.filter((task) => task.id !== action.taskID);
  return tasks;
};

interface Props {
  children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  return (
    <>
      <TasksContext.Provider value={{ tasks, dispatch }}>
        {children}
      </TasksContext.Provider>
    </>
  );
};

export default TasksProvider;
