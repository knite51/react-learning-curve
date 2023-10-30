import './App.css';
import PostList from './react-query/PostList';
import TodoForm from './react-query/TodoForm';
import TodoFormOptimisticUpdate from './react-query/TodoFormOptimisticUpdate';
import TodoList from './react-query/TodoList';
import Counter from './state-management/Counter';
import LoginStatus from './state-management/LoginStatus';
import TaskList from './state-management/TaskList';

function App() {
  return (
    <>
      <h1>React Starter Project</h1>
      <LoginStatus></LoginStatus>
      {/* <TaskList></TaskList> */}
      {/* <TodoFormOptimisticUpdate></TodoFormOptimisticUpdate> */}
      {/* <TodoForm></TodoForm> */}
      {/* <TodoList></TodoList> */}
      {/* <PostList></PostList> */}
    </>
  );
}

export default App;
