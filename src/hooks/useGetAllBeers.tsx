import { useEffect, useState } from "react";
import { getBeers } from "apis/beer";
import { useSetRecoilState } from "recoil";
import { beersListState } from "recoilStates/atom";

export function useGetAllBeers(page?: number): [boolean, string] {
  const setBeersList = useSetRecoilState(beersListState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancel = false;
    async function fetchRecipes() {
      try {
        setLoading(true);
        let queryParam = new URLSearchParams();
        if (page) {
          queryParam.append("skip", `${(page - 1) * 18}`);
          queryParam.append("limit", `${18}`);
        }
        const beers = await getBeers(queryParam);
        if (!cancel) {
          if (page && page !== 1) {
            setBeersList((x) => [...x, ...beers]);
          } else {
            setBeersList(beers);
          }
        }
      } catch (e) {
        setError("Error");
      } finally {
        if (!cancel) {
          setLoading(false);
        }
      }
    }
    fetchRecipes();
    return () => {
      cancel = true;
    };
  }, [page, setBeersList]);
  return [loading, error];
}
