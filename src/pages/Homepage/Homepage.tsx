import { BeerObject } from "models/beer.model";
import { useRecoilState, useRecoilValue } from "recoil";
import { beersListState, pageState } from "recoilStates/atom";
import Beer from "pages/Components/Beer/Beer";
import styles from "./Homepage.module.scss";
import { useGetBeers } from "hooks/useGetBeers";
import FilterMenu from "pages/Components/FilterMenu/FilterMenu";

function Homepage() {
  const beersList = useRecoilValue(beersListState);
  const [page, setPage] = useRecoilState(pageState);
  useGetBeers();

  const loadMoreBeers = () => {
    setPage(page + 1);
  };

  return (
    <div className={styles.homepageContainer}>
      <div className={styles.homepageContent}>
        <FilterMenu />
        <div className={styles.grid}>
          {beersList.map((beer: BeerObject) => (
            <Beer key={beer.id} beer={beer} />
          ))}
        </div>
        <div onClick={loadMoreBeers} className={styles.loadMoreBeers}>
          Load more
        </div>
      </div>
    </div>
  );
}

export default Homepage;
