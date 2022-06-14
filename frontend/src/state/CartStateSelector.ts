import { selector } from "recoil";
import { cartState } from "./CartState";

export const cartStateSelector = selector({
    key: "cartStateSelector",
    get: ({ get }) => {
      const cart = get(cartState);
      return cart;
    },
});

