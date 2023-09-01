import getBeers from "./getBeers";
import { Constants } from "constants/constants";

test("getBeerApi is correctly called", async () => {
  let page = 0,
    bitternessFilter = 0,
    alcoholFilterValue = 0,
    setBeersList = async () => {},
    setLoading = () => {},
    setError = () => {},
    getBeersApi = () => {
      return Promise.resolve([]);
    };

  getBeersApi = jest.fn(getBeersApi);

  await getBeers({
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

test("setBeerList is correctly filled with page=0", async () => {
  let page = 0,
    bitternessFilter = 0,
    alcoholFilterValue = 0,
    setBeersList = async () => {},
    setLoading = () => {},
    setError = () => {},
    getBeersApi = () => {
      return Promise.resolve([]);
    };

  setBeersList = jest.fn(setBeersList);

  await getBeers({
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

test("setBeerList is not filled on error", async () => {
  let page = 0,
    bitternessFilter = 0,
    alcoholFilterValue = 0,
    setBeersList = async () => {},
    setLoading = () => {},
    setError = () => {},
    getBeersApi = () => {
      throw new Error("No network");
    };

  setBeersList = jest.fn(setBeersList);
  setError = jest.fn(setError);

  await getBeers({
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
