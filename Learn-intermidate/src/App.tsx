import './App.css';
import PostList from './react-query/PostList';
import TodoForm from './react-query/TodoForm';
import TodoFormOptimisticUpdate from './react-query/TodoFormOptimisticUpdate';
import TodoList from './react-query/TodoList';

function App() {
  return (
    <>
      <h1>React Starter Project</h1>
      <TodoFormOptimisticUpdate></TodoFormOptimisticUpdate>
      {/* <TodoForm></TodoForm> */}
      <TodoList></TodoList>
      {/* <PostList></PostList> */}
    </>
  );
}

export default App;
