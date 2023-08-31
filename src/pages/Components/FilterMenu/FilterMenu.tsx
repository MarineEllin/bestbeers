import styles from "./FilterMenu.module.scss";
import { Button } from "@progress/kendo-react-buttons";
import { debounce } from "lodash";

import {
  Slider,
  SliderChangeEvent,
  SliderLabel,
} from "@progress/kendo-react-inputs";
import { Constants } from "constants/constants";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  alcoholFilterValueState,
  bitternessFilterValueState,
  pageState,
} from "recoilStates/atom";
import { useMemo, useState } from "react";

function FilterMenu() {
  const [bitternessFilter, setBitternessFilter] = useRecoilState(
    bitternessFilterValueState
  );

  const setAlcoholFilterValue = useSetRecoilState(alcoholFilterValueState);
  const [selectedHeightPercentAlcohol, setSelectedHeigtPercentAlcohol] =
    useState<boolean>(false);
  const setPage = useSetRecoilState(pageState);

  const debouncedhandleBitternessFilterChange = useMemo(
    () =>
      debounce((event: SliderChangeEvent) => {
        setBitternessFilter(event.value);
        setPage(Constants.INITIAL_NUMBER_OF_PAGE);
      }, Constants.DEBOUNCE_TIME_DURATION),
    [setBitternessFilter, setPage]
  );

  const handleClickFilterMoreHeightPercentAlcohol = () => {
    setSelectedHeigtPercentAlcohol(!selectedHeightPercentAlcohol);
    if (!selectedHeightPercentAlcohol) {
      setAlcoholFilterValue(Constants.HEIGHT_PERCENT_ALCOHOL_FILTER);
    } else {
      setAlcoholFilterValue(Constants.INITIAL_VALUE_ALCOHOL_FILTER);
    }
    setPage(Constants.INITIAL_NUMBER_OF_PAGE);
  };

  return (
    <div className={styles.menuContainer}>
      <i className={`${styles.filterIcon} fa-solid fa-filter`} />
      <div className={styles.alcoholContainer}>
        <span className="mr-5">Alcohol by volume </span>
        <Button
          onClick={handleClickFilterMoreHeightPercentAlcohol}
          togglable={true}
        >
          {`>`} 8%
        </Button>
      </div>
      <div className={styles.bitternessContainer}>
        <span>Bitterness </span>
        <Slider
          step={10}
          defaultValue={Constants.INITIAL_VALUE_BITERNESS_FILTER}
          min={0}
          max={100}
          value={bitternessFilter}
          onChange={debouncedhandleBitternessFilterChange}
        >
          <SliderLabel position={0}>0</SliderLabel>
          <SliderLabel position={20}>20</SliderLabel>
          <SliderLabel position={40}>40</SliderLabel>
          <SliderLabel position={60}>60</SliderLabel>
          <SliderLabel position={80}>80</SliderLabel>
          <SliderLabel position={100}>100</SliderLabel>
        </Slider>
      </div>
    </div>
  );
}

export default FilterMenu;
