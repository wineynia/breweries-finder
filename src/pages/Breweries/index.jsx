import { useEffect, useState } from "react";
import { getAllBreweries } from "../../api/breweries";
import BreweryList from "../../components/BreweryList";
import styles from "./breweries.module.css";

const Breweries = () => {
  const [breweries, setBreweries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true
    
    const fetchBreweries = async () => {
      try {
        const data = await getAllBreweries();
        if (mounted) setBreweries(data);
      } catch (err) {
        if (mounted) setError(err.message);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchBreweries();
    return () => {
      mounted = false;
    };
  }, []);

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
