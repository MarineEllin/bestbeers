import { atom } from "recoil";
import { BeerObject } from "models/beer.model";
import { Constants } from "constants/constants";

export const beersListState = atom<BeerObject[]>({
  key: "beersListState",
  default: [],
});

export const bitternessFilterValueState = atom<number>({
  key: "bitternessFilterValueState",
  default: Constants.INITIAL_VALUE_BITERNESS_FILTER,
});

export const pageState = atom<number>({
  key: "pageState",
  default: Constants.INITIAL_NUMBER_OF_PAGE,
});

export const alcoholFilterValueState = atom<number>({
  key: "alcoholFilterValueState",
  default: Constants.INITIAL_VALUE_ALCOHOL_FILTER,
});
