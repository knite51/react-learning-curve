import { createBrowserRouter } from 'react-router-dom';
import ContactPage from './ContactPage';
import ErrorPage from './ErrorPage';
import HomePage from './HomePage';
import Layout from './Layout';
import LoginPage from './LoginPage';
import UserDetailPage from './UserDetailPage';
import Userpage from './UserPage';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // or path: '', meaning show component as the index/landingPage of the parent
      { path: 'login', element: <LoginPage /> },

      { path: 'contact', element: <ContactPage /> },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: 'users',
        element: <Userpage />,
        children: [{ path: ':id', element: <UserDetailPage /> }],
      },
    ],
  },
]);

export default router;
