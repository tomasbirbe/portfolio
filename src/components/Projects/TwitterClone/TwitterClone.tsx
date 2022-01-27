import { DownArrow } from '../../Icons';
import general from '../general.module.css';
import styles from './TwitterClone.module.css';

const TwitterClone = () => {
  return (
    <section className={general.container} id="twitter-clone">
      <article className={styles.article}>
        <div className={general.project}>
          <h2 className={general.subtitle}>
            <a
              href="https://tb-twitter.vercel.app/"
              target="_blank"
              className={general.link}
            >
              Twitter Clone
            </a>
          </h2>
          <div className={general.about}>
            Este proyecto es un clon de la UI de Twitter y lo hice con el
            objetivo de poner en practica mis habilidades de maquetacion con
            ChakraUI y la implementacion de Responsive.
          </div>
          <div className={general.techs}>
            <div className={general.firstRow}>
              <img
                className={general.chakra}
                src="icons/chakra.svg"
                alt="A ChakraUI icon"
                loading="lazy"
              />
              <img
                className={general.react}
                src="icons/react.svg"
                alt="A React icon"
                loading="lazy"
              />
              <img
                className={general.github}
                src="icons/github.svg"
                alt="A GitHub icon"
                loading="lazy"
              />
            </div>
            <div className={general.secondRow}>
              <img
                className={general.css}
                src="icons/css.svg"
                alt="A CSS icon"
                loading="lazy"
              />
              <img
                className={general.html}
                src="icons/html.svg"
                alt="An HTML icon"
                loading="lazy"
              />
              <img
                className={general.ts}
                src="icons/ts.svg"
                alt="A TypeScript icon"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <img
          src="twitter-clone.webp"
          alt="An image preview of Twitter clone"
          className={general.img}
          loading="lazy"
        />
      </article>
      <DownArrow href="#calculator" />
    </section>
  );
};

export default TwitterClone;
