import { DownArrow } from '../Icons';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.container} id="about-me">
      <h1 className={styles.title}>Sobre mi</h1>
      <article className={styles.copy}>
        <span>
          En 2018 empece a estudiar Ingenieria en Sistemas con mucho entusiasmo
          pero por cuestiones de la pandemia tuve que suspender el cursado por
          tiempo indeterminado.
        </span>
        <span>
          A pesar de las consecuencias negativas de la pandemia, para mi fue una
          oportunidad para incursionar en el desarrollo web y aprender las
          tecnologias que se utliizan.
        </span>
        <span>
          ¿Tecnologias? ¡Cierto las{' '}
          <a className={styles.techs} href="#techs">
            tecnologias!
          </a>
        </span>
      </article>
      <DownArrow href="#techs" />
    </section>
  );
}
