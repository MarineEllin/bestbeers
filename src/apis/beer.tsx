import { BeerObject } from "models/beer.model";
const BEERS_API = "https://api.punkapi.com/v2/beers";

export async function getBeersApi(
  queryParam?: URLSearchParams
): Promise<BeerObject[]> {
  const response = await fetch(
    `${BEERS_API}${queryParam ? `?${queryParam}` : ""}`
  );
  if (response.ok) {
    const body = await response.json();
    return Array.isArray(body) ? body : [body];
  } else {
    throw new Error("Error fetch beers");
  }
}
