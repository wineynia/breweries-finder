import { useEffect, useState } from "react"
import { getAllBreweries } from "../../api/breweries"
import BreweryList from "../../components/BreweryList"
import styles from './breweries.module.css'

const Breweries = () => {
  const [breweries, setBreweries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    getAllBreweries()
    .then(setBreweries)
    .catch(err => setError(err.message))
    .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Loading . . .</p>
  if (error) return <p>Error: {error}</p>

  return (
    <section className={styles.section}>
    <h2>Breweries</h2>
    <BreweryList breweries={breweries} />
    </section>
  )
}

export default Breweries