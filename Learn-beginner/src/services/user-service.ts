import create from './http-service';

export interface User {
  id: string;
  name: string;
}

export default create('/users/');
