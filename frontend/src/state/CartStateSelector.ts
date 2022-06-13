import { selector } from "recoil";
import { cartState } from "./CartState";
import { reservationTime } from "./reservationTime";

export const cartStateSelector = selector({
    key: "cartStateSelector",
    get: ({ get }) => {
      const cart = get(cartState);
      //const current = cart.filter((item) => (item.reservedAt == undefined ? false : (new Date().getTime() - (new Date(item.reservedAt)).getTime()) < reservationTime));
      return cart;
    },
});

