// Create, Delete, Update User
// Add Loader
// reusable api client

import { useEffect, useState } from 'react';
import ReusableCol from '../firstSection/ReusableCol';
import apiClient, { CanceledError } from '../../../services/api-client';

interface User {
  id: string;
  name: string;
}

const LoadingIndicator = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // A default function in modern browser that helps abort asynchronous operations such as  http request, dom manipulation etc
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<User[]>('/users', {
        signal: controller.signal,
      })
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false); // For Dev
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false); // For Dev
      });
    // .finally(() => setIsLoading(false)); //Unfortunately doenst work the way it should in strict mode but fine in production For Prod
    return () => controller.abort();
  }, []);

  const handleDelete = (id: string) => {
    const originalUsers = [...users];
    setUsers(users.filter((user) => user.id !== id)); // Optimitic updatel be
    // Pessimitic is inside the https request itself
    apiClient.delete<User[]>('/users/' + id).catch((err) => {
      if (err instanceof CanceledError) return;
      setError(err.message);
      setUsers(originalUsers);
      setIsLoading(false); // For Dev
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: '0', name: 'Ayo' };
    setUsers([newUser, ...users]);

    apiClient
      .post('/users', newUser)
      .then((response) => {
        setUsers([response.data, ...users]);
      })
      .catch((err) => {
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + '!' };
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );

    apiClient.patch('/users/' + user.id, updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      <ReusableCol colDigit="4">
        <h4>Loading state</h4>
        {error && <p className="text-danger">{error}</p>}
        {isLoading && <div className="spinner-border"></div>}
        <button className="btn btn-primary mb-3" onClick={addUser}>
          Add User
        </button>

        <ul className="list-group ">
          {users.map((user) => (
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between"
            >
              {user.name}{' '}
              <button
                className="btn btn-secondary mb-2 me-1"
                onClick={() => updateUser(user)}
              >
                Update User
              </button>
              <button
                type="button"
                className="btn btn-outline-danger mb-2"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </ReusableCol>
    </>
  );
};

export default LoadingIndicator;
