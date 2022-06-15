import { Role, StatusOrder } from '@prisma/client';

export class ReturnUserInfoDto {
  email: string;
  password: string;
  name: string;
  surname: string;
  role: Role | null;
  address: {
    city: string;
    street: string;
    number: number;
    zip: number;
  };
  orders: {
    status: StatusOrder;
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

export class ReturnUserInfoNoPasswordDto {
  email: string;
  name: string;
  surname: string;
  role: Role | null;
  address: {
    city: string;
    street: string;
    number: number;
    zip: number;
  };
  orders: {
    status: StatusOrder;
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
