import styles from './Intro.module.css';

export default function Intro() {
  function handleClick() {
    console.log('Go to About me');
  }

  return (
    <section className={styles.container}>
      <button type="button" className={styles.menuButton}>
        <span className={styles.menu} />
      </button>
      <img
        src="profilepic.jpg"
        alt="A profile pic of me!"
        className={styles.profilePic}
      />
      <article className={styles.introContainer}>
        <h1 className={styles.title}>Hola!</h1>
        <p className={styles.intro}>
          Mi nombre es Tomás.{' '}
          <span className={styles.bold}>
            Soy Desarrollador Front End React{' '}
          </span>
          y espero poder mostrarte un poco lo que hago (que por cierto, me gusta
          mucho) y quien soy.
        </p>
      </article>
      <a href="#about-me" className={styles.downArrowLink}>
        <span className={styles.downArrow} />
      </a>
    </section>
  );
}
