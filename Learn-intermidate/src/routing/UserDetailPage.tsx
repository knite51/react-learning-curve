import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const UserDetailPage = () => {
  const params = useParams(); // returns params
  const [searchParams, setSearchParams] = useSearchParams(); // returns and update queryParams &user=1
  const location = useLocation(); // show full information about the route,path etc

  return <p>User {params.id}</p>;
};

export default UserDetailPage;
