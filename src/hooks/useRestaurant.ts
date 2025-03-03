import { useEffect, useState } from "react";

const useRestaurant = (resId: string) => {
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const [restaurant, setRestaurant] = useState(null);

  async function getRestaurantMenu() {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9046136&lng=77.614948&restaurantId=${resId}`
      );
      const json = await data.json();
      console.log(`data fetched`);
      setRestaurant(json?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return restaurant;
};

export default useRestaurant;
