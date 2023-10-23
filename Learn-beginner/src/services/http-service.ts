import apiClient from './api-client';

interface Entity {
  id: string;
}

class HttpService {
  endpoint!: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    // T to make the type generic
    const controller = new AbortController();

    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  create<T>(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }

  update<T extends Entity>(updatedEntity: T) {
    return apiClient.patch(this.endpoint + updatedEntity.id, updatedEntity);
  }

  delete(id: string) {
    return apiClient.delete(this.endpoint + id);
  }
}

// So that we dont hardcode the endpoints, create a function that creates an instance of the class passing the endpoint
const create = (endpoint: string) => new HttpService(endpoint);

export default create;
