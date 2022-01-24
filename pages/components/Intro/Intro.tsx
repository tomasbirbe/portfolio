import styles from './Intro.module.css';
import { DownArrow } from '../Icons';

export default function Intro() {
  function handleClick() {
    console.log('Go to About me');
  }

  return (
    <section className={styles.container} id="intro">
      {/* <article className={styles.article}> */}
      <img
        src="profilepic.jpg"
        alt="A profile pic of me!"
        className={styles.profilePic}
      />
      <div className={styles.introContainer}>
        <h1 className={styles.title}>Hola!</h1>
        <p className={styles.intro}>
          Mi nombre es Tomás.{' '}
          <span className={styles.bold}>
            Soy Desarrollador Front End React{' '}
          </span>
          y espero poder mostrarte un poco lo que hago (que por cierto, me gusta
          mucho) y quien soy.
        </p>
        <div className={styles.icons}>
          <a href="mailto: tomas.birbe@gmail.com">
            <img className={styles.email} src="icons/email.svg" alt="" />
            <span></span>
          </a>
          <a href="https://www.linkedin.com/in/tomas-birbe/" target="_blank">
            <img
              className={styles.linkedin}
              src="icons/white-linkedin.svg"
              alt=""
            />
            <span></span>
          </a>
          <a href="https://github.com/tomasbirbe" target="_blank">
            <img className={styles.github} src="icons/github.svg" alt="" />
            <span></span>
          </a>
        </div>
      </div>
      {/* </article> */}
      <DownArrow href="#about-me" />
    </section>
  );
}
