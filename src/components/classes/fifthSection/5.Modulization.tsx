// Export functionality into seperate modules
import ReusableCol from '../firstSection/ReusableCol';
import { CanceledError } from '../../../services/api-client';
import userService, { User } from '../../../services/user-service';
import useUser from '../../../hooks/useUsers';

const Modulization = () => {
  const { users, error, isLoading, setUsers, setError, setIsLoading } =
    useUser();

  const handleDelete = (id: string) => {
    const originalUsers = [...users];
    setUsers(users.filter((user) => user.id !== id));
    userService.delete(id).catch((err) => {
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
    userService
      .create<User>(newUser)
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
    userService.update<User>(updatedUser).catch((err) => {
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

export default Modulization;
