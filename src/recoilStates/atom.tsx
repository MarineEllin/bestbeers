import { atom } from "recoil";
import { BeerObject } from "models/beer.model";

export const beersListState = atom<BeerObject[]>({
  key: "beersListState",
  default: [],
});
