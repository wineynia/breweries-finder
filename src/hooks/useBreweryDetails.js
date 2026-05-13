import { useParams } from "react-router-dom";
import { useBrewery } from "../../hooks/useBrewery";
import styles from "./bDetails.module.css";

const BreweryDetails = () => {
  const { id } = useParams();
  const { brewery, loading, error } = useBrewery(id);

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
