import './App.css';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import AuthProvider from './state-management/providers/AuthProvider';
import TasksProvider from './state-management/providers/TasksProvider';

function App() {
  return (
    <>
      <AuthProvider>
        <TasksProvider>
          <NavBar></NavBar>
          <HomePage></HomePage>
        </TasksProvider>
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
