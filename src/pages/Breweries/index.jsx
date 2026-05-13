import { useBreweries } from "../../hooks/useBreweries";
import BreweryList from "../../components/BreweryList";
import styles from "./breweries.module.css";

const Breweries = () => {
  const { breweries, loading, error } = useBreweries();

  if (loading) return <p>Loading . . .</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className={styles.section}>
      <h2>Breweries</h2>
      <BreweryList breweries={breweries} />
    </section>
  );
};

export default Breweries;
