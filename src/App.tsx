import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/loader/Loader";
import Header from "./components/header/Header";
import RestaurantCard from "./components/RestaurantCards/RestaurantCard";
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
            <RestaurantCard />
          </div>
        </>
      )}
    </>
  );
}
export default App;
