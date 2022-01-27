import React from 'react';
import { DownArrow } from '../Icons';
import styles from './Techs.module.css';

const Techs = () => {
  return (
    <section className={styles.container} id="techs">
      <h2 className={styles.title}>Tecnologias</h2>
      <article className={styles.techs}>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.ts_link}
          aria-label="Ir a la documentacion de TypeScript"
        >
          <figure className={styles.figure}>
            <img
              src="icons/ts.svg"
              alt="Logo de TypeScript"
              className={styles.ts}
              loading="lazy"
            />
            <figcaption className={styles.figcaption}>TypeScript</figcaption>
          </figure>
        </a>
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.react_link}
          aria-label="Ir a la documentacion de React"
        >
          <figure className={styles.figure}>
            <img
              src="icons/react.svg"
              alt="Logo de React"
              className={styles.react}
              loading="lazy"
            />
            <figcaption className={styles.figcaption}>React</figcaption>
          </figure>
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/javascript"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.js_link}
          aria-label="Ir a la documentacion de JavaScript"
        >
          <figure className={styles.figure}>
            <img
              src="icons/js.svg"
              alt="Logo de JavaScript"
              className={styles.js}
              loading="lazy"
            />
            <figcaption className={styles.figcaption}>JavaScript</figcaption>
          </figure>
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.html_link}
          aria-label="Ir a la documentacion de HTML"
        >
          <figure className={styles.figure}>
            <img
              src="icons/html.svg"
              alt="Logo de HTML"
              className={styles.html}
              loading="lazy"
            />
            <figcaption className={styles.figcaption}>HTML</figcaption>
          </figure>
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.css_link}
          aria-label="Ir a la documentacion de CSS"
        >
          <figure className={styles.figure}>
            <img
              src="icons/css.svg"
              alt="Logo de CSS"
              className={styles.html}
            />
            <figcaption className={styles.figcaption}>CSS</figcaption>
          </figure>
        </a>
        <a
          href="https://chakra-ui.com/"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.chakra_link}
          aria-label="Ir a la documentacion de ChakraUI"
        >
          <figure className={styles.figure}>
            <img
              src="icons/chakra.svg"
              alt="Logo de ChakraUI"
              className={styles.chakra}
              loading="lazy"
            />
            <figcaption className={styles.figcaption}>Chakra-UI</figcaption>
          </figure>
        </a>
        <a
          href="https://styled-components.com/"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.styled_link}
          aria-label="Ir a la documentacion de Styled Components"
        >
          <figure className={styles.figure}>
            <img
              src="icons/styled-components.svg"
              alt="Logo de Styled Components"
              className={styles.styled}
              loading="lazy"
            />
            <figcaption className={styles.figcaption}>
              <span>Styled</span>
              <span>Components</span>
            </figcaption>
          </figure>
        </a>
      </article>
      <DownArrow href="#projects" />
    </section>
  );
};

export default Techs;
