import { atom } from "recoil";
import { catDataProps } from "../@types/types";

export const catItemState = atom<catDataProps[]>({
  key: "catItemState",
  default: [],
});
