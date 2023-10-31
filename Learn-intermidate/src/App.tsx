import { useReducer } from 'react';
import './App.css';
import taskReducer from './state-management/reducers/taskReducer';

import AuthProvider from './state-management/AuthProvider';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import TasksContext from './state-management/contexts/tasksContext';

function App() {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);

  return (
    <>
      <AuthProvider>
        <TasksContext.Provider value={{ tasks, dispatch: taskDispatch }}>
          <NavBar></NavBar>
          <HomePage></HomePage>
        </TasksContext.Provider>
      </AuthProvider>
      {/* <LoginStatus></LoginStatus> */}
      {/* <TaskList></TaskList> */}
      {/* <TodoFormOptimisticUpdate></TodoFormOptimisticUpdate> */}
      {/* <TodoForm></TodoForm> */}
      {/* <TodoList></TodoList> */}
      {/* <PostList></PostList> */}
    </>
  );
}

export default App;
