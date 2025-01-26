import { restaurantData } from "../../mock/restaurantIntialMock";
import styles from "./RestaurantCard.module.scss";

const RestaurantCard = () => {
  return (
    <div className={styles.MainCardContainer}>
      {restaurantData.map((restaurant, idx) => (
        <div key={idx} className={styles.Card}>
          <img src={restaurant.image} alt={restaurant.heading} />
          <h2>{restaurant.heading}</h2>
          <h3>{restaurant.tags}</h3>
          <h4>{restaurant.rating}</h4>
        </div>
      ))}
    </div>
  );
};

export default RestaurantCard;
