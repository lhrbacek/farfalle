import { Order } from "./order";

export interface User {
  id: number;
  email: string;
  name: string;
  surname: string;
  password: string;
  address: string;
  addressId: number;
  picture: string;
  orders: Order[];
}

export interface UserProfile {
  email: string;
  name: string;
  surname: string;
  role: string;
  addressId: number;
  address: {
    city: string;
    street: string;
    number: number;
    zip: number
  };
  orders: {
    status: string;
    createdAt: Date;
    tickets: {
      id: number;
      price: number;
      row: number;
      seat: number;
      performance: {
        dateTime: Date;
        play: {
          name: string;
        };
      };
    }[];
  }[];
}