import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import logo from "/assets/images/applogo.jpg";
import { useState } from "react";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleClick() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.appLogo}>
          <NavLink to="/">
            <img src={logo} alt="applogo" />
          </NavLink>
        </div>
        <div className={styles.appLink}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/">Cart</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.loginButton}>
          <button onClick={handleClick}>
            {isLoggedIn ? "LogOut" : "Login"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
