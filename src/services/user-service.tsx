import apiClient from '../services/api-client';

export interface User {
  id: string;
  name: string;
}

class UserService {
  getAllUser() {
    const controller = new AbortController();

    const request = apiClient.get<User[]>('/users', {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  createUser(newUser: User) {
    return apiClient.post('/users', newUser);
  }

  updateUser(id: string, updatedUser: User) {
    return apiClient.patch('/users/' + id, updatedUser);
  }

  deleteUser(id: string) {
    return apiClient.delete<User[]>('/users/' + id);
  }
}

export default new UserService();
