import './App.css';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import { TasksProvider } from './state-management/tasks';

function App() {
  return (
    <>
      <TasksProvider>
        <NavBar></NavBar>
        <HomePage></HomePage>
      </TasksProvider>

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
