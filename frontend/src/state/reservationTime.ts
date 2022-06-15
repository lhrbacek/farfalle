import { Ticket } from "../types/ticket";

export const reservationTime = 15000; // 10 seconds

export const filterCart = (cart: Ticket[]) => {
  return cart.filter((item) => (item.reservedAt == undefined ? false : (new Date().getTime() - (new Date(item.reservedAt)).getTime()) < reservationTime));
}