import { atom } from "recoil";
import { Ticket } from "../types/ticket_old";

export const cartState = atom<number[]>({
    key: "cartState",
    default: []
});
