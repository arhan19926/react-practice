import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import "./App.css";
import AnimRocket from "./assets/animations/AnimRocket.json";
import Loader from "./components/loader/loader";
function App() {
  const [count, setCount] = useState(0);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  },[]);

  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
        <>
          <div className="anim">
            <Lottie animationData={AnimRocket}></Lottie>
          </div>
          <h1>Vite + React starter</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </div>
        </>
      )}
    </>
  );
}
export default App;
