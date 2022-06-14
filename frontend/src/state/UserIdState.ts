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

export const userIdState = atom<string>({
    key: "userIdState",
    default: "",
    effects_UNSTABLE: [
        localStorageEffect('userId'),
      ],
});
