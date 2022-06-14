import { selector } from "recoil";
import { userIdState } from "./UserIdState";

export const authStateSelector = selector({
    key: "userIdStateSelector",
    get: ({ get }) => {
      return get(userIdState);
    },
});

