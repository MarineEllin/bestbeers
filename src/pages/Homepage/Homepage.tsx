import { BeerObject } from "models/beer.model";
import { useRecoilValue } from "recoil";
import { beersListState } from "recoilStates/atom";
import Beer from "pages/Components/Beer/Beer";
import styles from "./Homepage.module.scss";
import { useState } from "react";
import { useGetAllBeers } from "hooks/useGetAllBeers";
import FilterMenu from "pages/Components/FilterMenu/FilterMenu";

function Homepage() {
  useGetAllBeers();
  const beersList = useRecoilValue(beersListState);
  const [page, setPage] = useState(1);
  console.log(beersList);

  return (
    <div className={styles.homepageContainer}>
      <div className={styles.homepageContent}>
        <FilterMenu />
        <div className={styles.grid}>
          {beersList.map((beer: BeerObject) => (
            <Beer key={beer.id} beer={beer} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
