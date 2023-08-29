import styles from "./Beer.module.scss";
import { BeerObject } from "models/beer.model";

function Beer({ beer }: { beer: BeerObject }) {
  return (
    <div className={styles.beerCard}>
      <div className={styles.imageContainer}>
        <img src={beer.image_url} alt="" className={styles.image} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.name}>{beer.name}</div>
        <div className={styles.description}>{beer.description}</div>
        <div className={styles.food}>
          <ul>
            {beer.food_pairing.map((food) => (
              <li>
                <i className="fa-solid fa-utensils mr-5 font-color-primary-light" />
                {food}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Beer;
