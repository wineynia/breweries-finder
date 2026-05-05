import styles from './home.module.css'

const Home = () => {
  return (
    <section className={styles.section}>
      <h2>Hello there!</h2>
      <p>
        Check out the navigation above to browse breweries and find something new.
      </p>
    </section>
  );
}

export default Home