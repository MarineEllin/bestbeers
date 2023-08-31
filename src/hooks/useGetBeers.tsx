import { useEffect, useState } from "react";
import { getBeersApi } from "apis/beer";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  alcoholFilterValueState,
  beersListState,
  bitternessFilterValueState,
  pageState,
} from "recoilStates/atom";

import { Constants } from "constants/constants";

export function useGetBeers(): [boolean, string] {
  const setBeersList = useSetRecoilState(beersListState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const page = useRecoilValue(pageState);
  const bitternessFilter = useRecoilValue(bitternessFilterValueState);
  const alcoholFilterValue = useRecoilValue(alcoholFilterValueState);

  useEffect(() => {
    async function getBeers() {
      try {
        let queryParam = new URLSearchParams();
        queryParam.append("abv_gt", `${alcoholFilterValue}`);
        queryParam.append("ibu_lt", `${bitternessFilter}`);
        queryParam.append("page", `${page}`);
        queryParam.append(
          "per_page",
          `${Constants.INITIAL_NUMBER_OF_BEERS_DISPLAYED}`
        );
        const beers = await getBeersApi(queryParam);
        if (page > 1) {
          setBeersList((x) => [...x, ...beers]);
        } else {
          setBeersList(beers);
        }
      } catch (e) {
        setError("Error");
      } finally {
        setLoading(false);
      }
    }
    getBeers();
  }, [page, bitternessFilter, alcoholFilterValue, setBeersList]);
  return [loading, error];
}
