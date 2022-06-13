import { atom } from "recoil";
import { Ticket } from "../types/ticket";

const localStorageEffect = (key: any) => ({setSelf, onSet}) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }
    onSet((newValue: any) => {
      localStorage.setItem(key, JSON.stringify(newValue))
    })
  }

export const cartState = atom<Ticket[]>({
    key: "cartState",
    default: [],
    effects_UNSTABLE: [
        localStorageEffect('cart'),
      ],
});
