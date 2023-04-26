// refatorando main.ts

import axios from 'axios';
import { Product, User } from './types';

class ApiConsumer {
  public api;

  constructor(api: string){
    this.api = api;
  }

  async execute<T>(path: string) {
    const { data } = await axios.get<T>(this.api + path);
    return data;
  };
}

const store = new ApiConsumer('https://fakestoreapi.com');
const json = new ApiConsumer('https://jsonplaceholder.typicode.com');

json.execute<User[]>('/users').then((users) => console.log(users));
store.execute<Product>('/products/1').then((product) => console.log(product));

// execute<Product[]>(store + '/products').then((products) => console.log(products));
// execute<User>(json + '/users/1').then((user) => console.log(user));
