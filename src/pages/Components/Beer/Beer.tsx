import { Constants } from "constants/constants";
import styles from "./Beer.module.scss";
import { BeerObject } from "models/beer.model";

function Beer({ beer }: { beer: BeerObject }) {
  return (
    <div className={styles.beerCard}>
      <div className={styles.imageContainer}>
        <img src={beer.image_url} alt="" className={styles.image} />
      </div>
      <div className={styles.infoContainer}>
        <div>
          <div className={styles.name}>{beer.name}</div>
          <div className={styles.descriptionContainer}>
            <div className={styles.description}>{beer.description}</div>
          </div>

          <div className={styles.food}>
            <ul>
              {beer.food_pairing.map((food, index) => (
                <li key={index}>
                  <i className="fa-solid fa-utensils mr-5 font-color-primary-light" />
                  {food}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.indicators}>
          <div>
            <div className="mb-5">Bitterness</div>
            <div
              className={styles.bitternessBorderBar}
              style={{
                width: Constants.MAX_IBU_INDICATOR,
              }}
            >
              <div
                className={styles.bitternessBar}
                style={{
                  width: beer.ibu != null ? beer.ibu : 0,
                }}
              ></div>
            </div>
          </div>
          <div className={styles.alcoholContainer}>
            <div>{beer.abv}%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beer;
