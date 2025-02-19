import { useParams } from "react-router-dom";
import styles from "./RestaurantMenu.module.scss";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../../../public/constants/common.constants";
import Shimmer from "../Shimmer/Shimmer";

export const RestaurantMenu = () => {
  const { id } = useParams();
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const [restaurant, setRestaurant] = useState(null);

  async function getRestaurantMenu() {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9046136&lng=77.614948&restaurantId=${id}`
      );
      const json = await data.json();
      console.log(`data fetched`);
      console.log(json?.data);
      setRestaurant(json?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

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
    cards.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards || [];

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
          {itemCards.map((item) => {
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
                  <p>{(description && description.slice(0, 60)) || "Dummy"}</p>
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
          })}
        </div>
        <span>|</span>
        <span className="time">{sla?.slaString}</span>
      </div>
    </>
  );
};
