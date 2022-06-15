import { atom } from "recoil";

const localStorageEffect = (key: any) => ({setSelf, onSet}) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }
    onSet((newValue: any) => {
      localStorage.setItem(key, JSON.stringify(newValue))
    })
  }

export const userIdState = atom<Number>({
    key: "userIdState",
    default: -1,
    effects_UNSTABLE: [
        localStorageEffect('userId'),
      ],
});
