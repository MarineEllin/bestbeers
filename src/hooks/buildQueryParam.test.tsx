import { Constants } from "constants/constants";
import buildQueryParam from "./buildQueryParam";

test("queryParam is properly build with page=1, bitternessFilter=50 and alcoholFilterValue=4", () => {

  const queryParam = buildQueryParam({
    page: 1,
    bitternessFilter:50,
    alcoholFilterValue: 4
  });

  expect(queryParam.toString()).toBe(
    `abv_gt=4&ibu_lt=50&page=1&per_page=${Constants.INITIAL_NUMBER_OF_BEERS_DISPLAYED}`
  );
});
