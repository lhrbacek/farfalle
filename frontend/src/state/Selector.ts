import { selector } from "recoil";
import { Ticket } from "../types/ticket";
import { cartState } from "./Atom";


export const cartStateSelector = selector({
    key: "cartStateSelector",
    get: ({ get }) => {
      const cart = get(cartState);
      return cart;
    },
});
