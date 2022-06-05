import { selector } from "recoil";
import { cartState } from "./Atom";
import { reservationTime } from "./reservationTime";

export const cartStateSelector = selector({
    key: "cartStateSelector",
    get: ({ get }) => {
      const cart = get(cartState);
      const now = new Date();
      return cart.filter((item) => (item.reservedAt == undefined ? false : (now.getTime() - (new Date(item.reservedAt)).getTime()) < reservationTime));
    },
});

