import { useParams } from "react-router-dom";
import styles from "./RestaurantMenu.module.scss";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../../../public/constants/common.constants";

export const RestaurantMenu = () => {
  const { id } = useParams();
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const [restaurant, setRestaurant] = useState({});

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

  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    totalRatingsString,
    cuisines,
    locality,
    sla,
  } = restaurant?.cards?.[2]?.card?.card?.info || {};

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
        <span>|</span>
        <span className="time">{sla?.slaString}</span>
      </div>
    </>
  );
};
