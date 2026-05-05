import styles from './about.module.css'

const About = () => {
  return (
    <section className={styles.section}>
      <h2>About</h2>
      <p>
        BrewFinder is a simple way to discover breweries. Browse around, and if something looks interesting, open it to see more.
      </p>
    </section>
  );
}

export default About