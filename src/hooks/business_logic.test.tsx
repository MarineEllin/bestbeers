import getBeers from "./business_logic";
import { Constants } from "constants/constants";

test("getBeerApi is correctly called", () => {
  let page = 0,
    bitternessFilter = 0,
    alcoholFilterValue = 0,
    setBeersList = () => {},
    setLoading = () => {},
    setError = () => {},
    getBeersApi = () => {
      return Promise.resolve([]);
    };

  getBeersApi = jest.fn(getBeersApi);

  getBeers({
    page,
    bitternessFilter,
    alcoholFilterValue,
    setBeersList,
    setLoading,
    setError,
    getBeersApi,
  });

  expect(getBeersApi).toBeCalledTimes(1);

  let expectedQueryParam = new URLSearchParams();
  expectedQueryParam.append("abv_gt", `${alcoholFilterValue}`);
  expectedQueryParam.append("ibu_lt", `${bitternessFilter}`);
  expectedQueryParam.append("page", `${page}`);
  expectedQueryParam.append(
    "per_page",
    `${Constants.INITIAL_NUMBER_OF_BEERS_DISPLAYED}`
  );

  expect(getBeersApi).toHaveBeenCalledWith(expectedQueryParam);
});

test("setBeerList is correctly filled with page=0", () => {
  let page = 0,
    bitternessFilter = 0,
    alcoholFilterValue = 0,
    setBeersList = () => {},
    setLoading = () => {},
    setError = () => {},
    getBeersApi = () => {
      return Promise.resolve([]);
    };

  setBeersList = jest.fn(setBeersList);

  getBeers({
    page,
    bitternessFilter,
    alcoholFilterValue,
    setBeersList,
    setLoading,
    setError,
    getBeersApi,
  });

  expect(setBeersList).toBeCalledTimes(1);
});

test("setBeerList is not filled on error", () => {
  let page = 0,
    bitternessFilter = 0,
    alcoholFilterValue = 0,
    setBeersList = () => {},
    setLoading = () => {},
    setError = () => {},
    getBeersApi = () => {
      throw new Error("No network");
    };

  setBeersList = jest.fn(setBeersList);
  setError = jest.fn(setError);

  getBeers({
    page,
    bitternessFilter,
    alcoholFilterValue,
    setBeersList,
    setLoading,
    setError,
    getBeersApi,
  });

  expect(setBeersList).toBeCalledTimes(0);
  expect(setError).toBeCalledTimes(1);
});
