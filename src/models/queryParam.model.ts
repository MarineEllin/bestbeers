export interface QueryParamObject {
  page: number;
  bitternessFilter: number;
  alcoholFilterValue: number;
  setBeersList?: () => {};
  setError?: () => {};
  getBeersApi?: () => {};
}
