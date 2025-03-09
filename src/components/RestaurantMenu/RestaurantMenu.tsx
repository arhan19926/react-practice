import { useParams } from "react-router-dom";
import styles from "./RestaurantMenu.module.scss";
import { IMG_CDN_URL } from "../../../public/constants/common.constants";
import Shimmer from "../Shimmer/Shimmer";
import useRestaurant from "../../hooks/useRestaurant";

export const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id as string);

  if (!restaurant) {
    return <Shimmer></Shimmer>;
  }

  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    totalRatingsString,
    cuisines,
    locality,
    sla,
  } = restaurant?.cards?.[2]?.card?.card?.info || {};

  const cards =
    restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  let itemCards =
    cards.find(
      (c: { card: { card: { itemCards: any } } }) => c?.card?.card?.itemCards
    )?.card?.card?.itemCards || [];

  return (
    <>
      <div className={styles.Container}>
        <h1>Restaurant Menu</h1>
        <img src={IMG_CDN_URL + cloudinaryImageId} alt={name}></img>
        <h1>{name}</h1>
        <h3>{locality}</h3>
        <p>{cuisines?.join(", ")}</p>
        <p>
          Rating: {avgRatingString} ({totalRatingsString})
        </p>
        <h1>Menu</h1>
        <div className={styles.MenuContainer}>
          {itemCards.map(
            (item: {
              card: {
                info: {
                  id: any;
                  name: any;
                  price: any;
                  defaultPrice: any;
                  ratings: any;
                  imageId: any;
                  description: any;
                };
              };
            }) => {
              const {
                id,
                name,
                price,
                defaultPrice,
                ratings,
                imageId,
                description,
              } = item.card.info;
              return (
                <div key={id} className={styles.MenuItems}>
                  <div className="left">
                    <h2>{name}</h2>
                    <h4>₹{price / 100 || defaultPrice / 100}</h4>
                    <p>
                      {(description && description.slice(0, 60)) || "Dummy"}
                    </p>
                    <h4 className="rating">
                      {ratings?.aggregatedRating?.rating}

                      <span>
                        {ratings?.aggregatedRating?.rating || 3.8} (
                        {ratings?.aggregatedRating?.ratingCountV2 || 6})
                      </span>
                    </h4>
                  </div>
                  <div className="right">
                    <img src={IMG_CDN_URL + imageId} alt={name} />
                    <button className="add-btn">ADD</button>
                  </div>
                </div>
              );
            }
          )}
        </div>
        <span>|</span>
        <span className="time">{sla?.slaString}</span>
      </div>
    </>
  );
};
