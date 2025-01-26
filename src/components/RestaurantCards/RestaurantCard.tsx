import styles from "./RestaurantCard.module.scss";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div key={restaurant.uuid} className={styles.Card}>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          restaurant.info.cloudinaryImageId
        }
        alt={restaurant.info.name}
      />
      <h2>{restaurant.info.name}</h2>
      <h4>{restaurant.info.sla.lastMileTravelString}</h4>
      <h4>
        {"⭐️" +
          restaurant.info.avgRatingString +
          " | " +
          restaurant.info.sla.slaString}
      </h4>
      <h4>{restaurant.info.cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestaurantCard;
