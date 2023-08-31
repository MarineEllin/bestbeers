import { useEffect, useState } from "react";
import { getBeersApi } from "apis/beer";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  alcoholFilterValueState,
  beersListState,
  bitternessFilterValueState,
  pageState,
} from "recoilStates/atom";

import getBeers from "./business_logic";

export function useGetBeers(): [boolean, string] {
  const setBeersList = useSetRecoilState(beersListState);
  const [loading, setLoading] = useState(true);
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
      setLoading,
      setError,
      getBeersApi,
    });
  }, [page, bitternessFilter, alcoholFilterValue, setBeersList]);
  return [loading, error];
}
