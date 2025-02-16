import { useEffect, useState } from "react";
import { RestaurantList } from "../../mock/mockData";
import Loader from "../Loader/Loader";
import SearchInput from "../SearchInput/SearchInput";
import RestaurantCard from "../RestaurantCards/RestaurantCard";
import Shimmer from "../Shimmer/Shimmer";
import "./Home.css";

const Home = () => {
  const [isloading, setIsloading] = useState(true);
  const [restaurants, setRestaurants] = useState(RestaurantList);
  const [isSearching, setIsSearching] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
    console.log(`useeffect called`);
  }, []);

  const handleSearch = (query: string) => {
    setIsSearching(true);
    setTimeout(() => {
      const filteredData = RestaurantList.filter(
        (restaurant) =>
          restaurant.info.name.toLowerCase().includes(query.toLowerCase()) ||
          restaurant.info.cuisines
            .join(", ")
            .toLowerCase()
            .includes(query.trim().toLowerCase())
      );
      setRestaurants(filteredData);
      setIsSearching(false);
    }, 2000);
  };

  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
        <>
          <div className="Container">
            <SearchInput onSearch={handleSearch} />
            <div className="RestaurantCardContainer">
              {isSearching ? (
                Array(10)
                  .fill("")
                  .map((_, idx) => <Shimmer key={idx} />)
              ) : restaurants.length > 0 ? (
                restaurants.map((restaurant) => {
                  return (
                    <RestaurantCard
                      key={restaurant.info.id}
                      restaurant={restaurant}
                    />
                  );
                })
              ) : (
                <h1>No Restaurants Found .</h1>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
