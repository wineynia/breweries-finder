import { Link, NavLink } from "react-router-dom";
import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        About
      </NavLink>
      <NavLink
        to="/breweries"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Breweries
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navigation;
