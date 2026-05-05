import styles from './bCard.module.css'
import { Link } from 'react-router-dom'

const BreweryCard = ({ brewery }) => {
  return (
    <div className={styles.card}>
      <h3>{brewery.name}</h3>
      <p className={styles.type}>{brewery.brewery_type}</p>
      <p>{brewery.city}, {brewery.state}</p>
      <Link to={`/breweries/${brewery.id}`}>Click me for more details!</Link>
    </div>
  )
}

export default BreweryCard