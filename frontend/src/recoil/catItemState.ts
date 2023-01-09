import { atom } from "recoil";
import { catProps } from "../@types/types";

export const catItemState = atom<catProps[]>({
  key: "catItemState",
  default: [],
});
