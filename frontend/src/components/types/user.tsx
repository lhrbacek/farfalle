export interface User {
  id: number;
  email: string;
  name: string;
  surname: string;
  password: string;
  address: string;
  addressId: number;
  picture: string;
  orders: never[];
}