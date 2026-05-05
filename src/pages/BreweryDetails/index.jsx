import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBreweryById } from "../../api/breweries";
import styles from "./bDetails.module.css";

const BreweryDetails = () => {
  const { id } = useParams();

  const [brewery, setBrewery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    const fetchBrewery = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await getBreweryById(id);
        if (mounted) setBrewery(data);
      } catch (err) {
        if (mounted) setError(err.message || "Error fetching brewery");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchBrewery()
    return () => { mounted = false}
  }, [id]);

  if (loading) return <p>Loading . . .</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className={styles.section}>
      <h2>{brewery.name}</h2>
      <p>Type: {brewery.brewery_type}</p>
      <p>City: {brewery.city}</p>
      <p>State: {brewery.state}</p>
      <p>Country: {brewery.country}</p>

      {brewery.website_url && (
        <p>
          Website: <a href={brewery.website_url}>{brewery.website_url}</a>
        </p>
      )}
    </section>
  );
};

export default BreweryDetails;
