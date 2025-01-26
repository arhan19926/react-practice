import Lottie from "lottie-react";
import loaderAnim from "../../../public/assets/animations/loaderAnim.json";
import styles from './loader.module.scss'
const Loader = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.loaderContainer}>
      {" "}
        <Lottie animationData={loaderAnim} />
      </div>
    </div>
  );
};

export default Loader;
