import { Constants } from "constants/constants";

export default async function getBeers(context: any) {
  try {
    let queryParam = new URLSearchParams();
    queryParam.append("abv_gt", `${context.alcoholFilterValue}`);
    queryParam.append("ibu_lt", `${context.bitternessFilter}`);
    queryParam.append("page", `${context.page}`);
    queryParam.append(
      "per_page",
      `${Constants.INITIAL_NUMBER_OF_BEERS_DISPLAYED}`
    );
    const beers = await context.getBeersApi(queryParam);
    if (context.page > 1) {
      context.setBeersList((x: any) => [...x, ...beers]);
    } else {
      context.setBeersList(beers);
    }
  } catch (e) {
    context.setError("Error");
  } finally {
    context.setLoading(false);
  }
}
