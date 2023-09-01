import { useEffect, useState } from "react";
import { getBeersApi } from "apis/beer";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  alcoholFilterValueState,
  beersListState,
  bitternessFilterValueState,
  pageState,
} from "recoilStates/atom";

import getBeers from "./getBeers";

export function useGetBeers(): [string] {
  const setBeersList = useSetRecoilState(beersListState);
  const [error, setError] = useState("");
  const page = useRecoilValue(pageState);
  const bitternessFilter = useRecoilValue(bitternessFilterValueState);
  const alcoholFilterValue = useRecoilValue(alcoholFilterValueState);

  useEffect(() => {
    getBeers({
      page,
      bitternessFilter,
      alcoholFilterValue,
      setBeersList,
      setError,
      getBeersApi,
    });
  }, [page, bitternessFilter, alcoholFilterValue, setBeersList]);
  return [error];
}
