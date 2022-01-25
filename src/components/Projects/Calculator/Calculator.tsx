import { DownArrow } from '../../Icons';
import general from '../general.module.css';
import styles from './Calculator.module.css';

const Calculator = () => {
  return (
    <section id="calculator" className={general.container}>
      <article className={styles.article}>
        <div className={general.project}>
          <h2 className={general.subtitle}>
            <a
              href="https://tb-calculator.vercel.app/"
              target="_blank"
              className={general.link}
            >
              Calculadora
            </a>
          </h2>
          <div className={general.about}>
            Este proyecto es una calculadora que puede guardar y mostrar valores
            definidos por el usuario. Uno de los primeros proyectos que me ayudo
            a ganar experiencia con CSS Grid, React y LocalStorage.
          </div>
          <div className={general.techs}>
            <div className={general.firstRow}>
              <img
                className={general.styledComponents}
                src="icons/styled-components.svg"
                alt=""
              />
              <img
                className={general.react}
                src="icons/react.svg"
                alt="An icon of React"
              />
              <img
                className={general.github}
                src="icons/github.svg"
                alt="An icon of GitHub"
              />
            </div>
            <div className={general.secondRow}>
              <img
                className={general.css}
                src="icons/css.svg"
                alt="An icon of CSS"
              />
              <img
                className={general.html}
                src="icons/html.svg"
                alt="An icon of HTML"
              />
              <img
                className={general.js}
                src="icons/js.svg"
                alt="An icon of Js"
              />
            </div>
          </div>
        </div>
        <img
          src="calculadora.jpg"
          alt="An image preview of Calculator App"
          className={general.img}
        />
      </article>
      <DownArrow href="#contact" />
    </section>
  );
};

export default Calculator;
