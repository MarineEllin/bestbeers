import { Constants } from "constants/constants";
import buildQueryParam from "./buildQueryParam";

test("queryParam is properly build with page=1, bitternessFilter=50 and alcoholFilterValue=4", () => {
  const expected = {
    page: 1,
    bitternessFilter: 50,
    alcoholFilterValue: 4,
  };
  const queryParam = buildQueryParam(expected);

  expect(queryParam.toString()).toBe(
    `abv_gt=${expected.alcoholFilterValue}&ibu_lt=${expected.bitternessFilter}&page=${expected.page}&per_page=${Constants.INITIAL_NUMBER_OF_BEERS_DISPLAYED}`
  );
});

test("queryParam is properly build with page=2, bitternessFilter=100 and alcoholFilterValue=50", () => {
  const expected = {
    page: 2,
    bitternessFilter: 100,
    alcoholFilterValue: 50,
  };
  const queryParam = buildQueryParam(expected);

  expect(queryParam.toString()).toBe(
    `abv_gt=${expected.alcoholFilterValue}&ibu_lt=${expected.bitternessFilter}&page=${expected.page}&per_page=${Constants.INITIAL_NUMBER_OF_BEERS_DISPLAYED}`
  );
});
