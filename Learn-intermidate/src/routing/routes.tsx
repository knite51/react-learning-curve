import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import UserListPage from './UserListPage';
import ContactPage from './ContactPage';
import UserDetailPage from './UserDetailPage';
import Layout from './Layout';
import Userpage from './Userpage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> }, // or path: '', meaning show component as the index/landingPage of the parent
      {
        path: 'users',
        element: <Userpage />,
        children: [{ path: ':id', element: <UserDetailPage /> }],
      },

      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);

export default router;
