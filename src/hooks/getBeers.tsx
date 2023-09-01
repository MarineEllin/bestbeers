import buildQueryParam from "./buildQueryParam";

export default async function getBeers(context: any) {
  try {
    const beers = await context.getBeersApi(buildQueryParam(context));
    if (context.page > 1) {
      context.setBeersList((x: any) => [...x, ...beers]);
    } else {
      context.setBeersList(beers);
    }
  } catch (e) {
    context.setError("Error");
  }
}
