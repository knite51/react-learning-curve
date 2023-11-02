import { useContext } from 'react';
import { LoginStatus } from './auth';
import TasksContext from './tasks/tasksContext';
import useCounterStore from './counter/store';

const NavBar = () => {
  const { tasks } = useContext(TasksContext);
  const counter = useCounterStore((s) => s.counter);
  // console.log('this will rerendered only if counter changes');

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
