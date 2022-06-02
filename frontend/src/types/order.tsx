import { Ticket } from "./ticket"

// for returning tickets
export interface Order {
  id: number,
  status: number,
  email: string,
  createdAt: Date,
  tickets: Ticket[],
  addressId: number,
  address: {
    id: number,
    name: string,
    street: string,
    phone: number,
    zip: number,
    city: string,
  }
  userId: number
}

// for storing into DB
export interface OrderStore {
  id: number,
  status: number,
  email: string,
  createdAt: Date,
  tickets: Ticket[],
  addressId: number,
  address: {
    id: number,
    name: string,
    street: string,
    phone: number
    zip: number,
    city: string,
    userId: number | null,
  }
  userId: number | null,
}
