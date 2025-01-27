import { useEffect, useState } from "react";
import "./App.css";
import RestaurantCard from "./components/RestaurantCards/RestaurantCard";
import { RestaurantList } from "./mock/mockData";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import SearchInput from "./components/SearchInput/SearchInput";
function App() {
  const [isloading, setIsloading] = useState(true);
  const [restaurants, setRestaurants] = useState(RestaurantList);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  }, []);

  const handleSearch = (query: string) => {
    const filteredData = RestaurantList.filter(
      (restaurant) =>
        restaurant.info.name.toLowerCase().includes(query.toLowerCase()) ||
        restaurant.info.cuisines
          .join(", ")
          .toLowerCase()
          .includes(query.toLowerCase())
    );
    setRestaurants(filteredData);
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
              {restaurants.map((restaurant) => {
                return (
                  <RestaurantCard
                    key={restaurant.info.id}
                    restaurant={restaurant}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default App;
