import { Constants } from "constants/constants";

test("queryParam is properly build with page=1, bitternessFilter=50 and alcoholFilterValue=4", () => {
  let queryParam = new URLSearchParams();
  queryParam.append("abv_gt", "4");
  queryParam.append("ibu_lt", "50");
  queryParam.append("page", "1");
  queryParam.append(
    "per_page",
    `${Constants.INITIAL_NUMBER_OF_BEERS_DISPLAYED}`
  );

  expect(queryParam.toString()).toBe(
    `abv_gt=4&ibu_lt=50&page=1&per_page=${Constants.INITIAL_NUMBER_OF_BEERS_DISPLAYED}`
  );
});
