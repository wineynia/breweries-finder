import styles from "./header.module.css";
import logo from "../../assets/logo.png";
import Navigation from "../Navigation";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.text}>
        <h1 className={styles.title}>BrewFinder</h1>
        <p className={styles.subtitle}>
          Find local popular breweries near you!
        </p>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
