import styles from './bList.module.css'
import BreweryCard from '../BreweryCard'

const BreweryList = ({ breweries }) => {
  return (
    <div className={styles.list}>{breweries.map((brew) => (<BreweryCard key={brew.id} brewery={brew} />))}</div>
  )
}

export default BreweryList