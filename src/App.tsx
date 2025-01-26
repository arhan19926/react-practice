import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/loader/Loader";
import Header from "./components/header/Header";
import RestaurantCard from "./components/RestaurantCards/RestaurantCard";
import { RestaurantList } from "./mock/mockData";
function App() {
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div className="container">
            {RestaurantList.map((restaurant) => {
              return (
                <RestaurantCard
                  key={restaurant.info.id}
                  restaurant={restaurant}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
export default App;
