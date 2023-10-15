// Fetching Data and Handling Error
// Async / await
// Cancelling fetch request: this is done using the clean up function of useEffect
// this is important as you dont want to run a http request when a user leaves a page
// or render an update to a closed component

import axios, { AxiosError, CanceledError } from 'axios';
import ReusableCol from '../firstSection/ReusableCol';
import { useEffect, useState } from 'react';

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const FetchData = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // A default function in modern browser that helps abort asynchronous operations such as  http request, dom manipulation etc
    const controller = new AbortController();
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', {
        signal: controller.signal,
      })
      .then((response) => setUsers(response.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  // useEffect(() => {
  // const fetchUsers = async () => {
  //   try {
  //     const response = await axios.get<User[]>(
  //       'https://jsonplaceholder.typicode.com/users'
  //     );
  //     setUsers(response.data);
  //   } catch (error) {
  //     if (error instanceof CanceledError) return;
  //     setError((error as AxiosError).message);
  //   }
  // };
  // }, []);

  return (
    <>
      <ReusableCol>
        <h4>User's List HTTPS GET</h4>
        {error && <p className="text-danger">{error}</p>}
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </ReusableCol>
    </>
  );
};

export default FetchData;
