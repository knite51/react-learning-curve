import { Navigate, Outlet } from 'react-router-dom';
import UserListPage from './UserListPage';
import useAuth from './hooks/useAuth';

const Userpage = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

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
