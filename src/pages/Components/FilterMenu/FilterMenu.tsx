import styles from "./FilterMenu.module.scss";
import { Button } from "@progress/kendo-react-buttons";
import { Slider, SliderLabel } from "@progress/kendo-react-inputs";

function FilterMenu() {
  return (
    <div className={styles.menuContainer}>
      <i
        className="fa-solid fa-filter font-color-primary"
        style={{
          fontSize: 54,
        }}
      />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <span className="mb-10">Alcohol by volume: </span>
        <Button togglable={true}>{`>`} 8%</Button>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <span className="mb-10">Bitterness: </span>
        <Slider step={10} defaultValue={100} min={0} max={100}>
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
