import { Constants } from "constants/constants";
import { QueryParamObject } from "models/queryParam.model";

export default function buildQueryParam(context: QueryParamObject) {
  let queryParam = new URLSearchParams();
  queryParam.append("abv_gt", `${context.alcoholFilterValue}`);
  queryParam.append("ibu_lt", `${context.bitternessFilter}`);
  queryParam.append("page", `${context.page}`);
  queryParam.append(
    "per_page",
    `${Constants.INITIAL_NUMBER_OF_BEERS_DISPLAYED}`
  );
  return queryParam;
}
