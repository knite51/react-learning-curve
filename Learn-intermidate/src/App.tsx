import { useReducer } from 'react';
import './App.css';
import taskReducer from './state-management/reducers/taskReducer';

import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import AuthContext from './state-management/contexts/authContext';
import TasksContext from './state-management/contexts/tasksContext';
import authReducer from './state-management/reducers/authReducer';

function App() {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);
  const [user, authDispatch] = useReducer(authReducer, '');
  return (
    <>
      <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
        <TasksContext.Provider value={{ tasks, dispatch: taskDispatch }}>
          <NavBar></NavBar>
          <HomePage></HomePage>
        </TasksContext.Provider>
      </AuthContext.Provider>
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
