import { useEffect, useState } from "react";
import "./App.css";
import RestaurantCard from "./components/RestaurantCards/RestaurantCard";
import { RestaurantList } from "./mock/mockData";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import SearchInput from "./components/SearchInput/SearchInput";
import Shimmer from "./components/Shimmer/Shimmer";
function App() {
  const [isloading, setIsloading] = useState(true);
  const [restaurants, setRestaurants] = useState(RestaurantList);
  const [isSearching, setIsSearching] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
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
          <Header />
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
}
export default App;
