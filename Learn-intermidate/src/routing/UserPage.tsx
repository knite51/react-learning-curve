import { Outlet } from 'react-router-dom';
import UserListPage from './UserListPage';

const Userpage = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <UserListPage />
        </div>
        <div className="col-md-6">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Userpage;
