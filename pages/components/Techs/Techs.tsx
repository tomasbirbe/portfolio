import React from 'react';
import { DownArrow } from '../Icons';
import styles from './Techs.module.css';

const Techs = () => {
  return (
    <section className={styles.container} id="techs">
      <h2 className={styles.title}>Tecnologias</h2>
      <article className={styles.techs}>
        {/* <div className={styles.firstRow}> */}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          className={styles.ts_link}
        >
          <figure className={styles.figure}>
            <img
              src="icons/ts.svg"
              alt="A TypeScript Icon"
              className={styles.ts}
            />
            <figcaption className={styles.figcaption}>TypeScript</figcaption>
          </figure>
        </a>
        <a
          href="https://reactjs.org/"
          target="_blank"
          className={styles.react_link}
        >
          <figure className={styles.figure}>
            <img
              src="icons/react.svg"
              alt="A React icon"
              className={styles.react}
            />
            <figcaption className={styles.figcaption}>React</figcaption>
          </figure>
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/javascript"
          target="_blank"
          className={styles.js_link}
        >
          <figure className={styles.figure}>
            <img
              src="icons/js.svg"
              alt="A JavaScript icon"
              className={styles.js}
            />
            <figcaption className={styles.figcaption}>JavaScript</figcaption>
          </figure>
        </a>
        {/* </div> */}
        {/* <div className={styles.secondRow}> */}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          target="_blank"
          className={styles.html_link}
        >
          <figure className={styles.figure}>
            <img
              src="icons/html.svg"
              alt="A HTML icon"
              className={styles.html}
            />
            <figcaption className={styles.figcaption}>HTML</figcaption>
          </figure>
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
          className={styles.css_link}
        >
          <figure className={styles.figure}>
            <img src="icons/css.svg" alt="A CSS icon" className={styles.html} />
            <figcaption className={styles.figcaption}>CSS</figcaption>
          </figure>
        </a>
        {/* </div> */}
        {/* <div className={styles.thirdRow}> */}
        <a
          href="https://chakra-ui.com/"
          target="_blank"
          className={styles.chakra_link}
        >
          <figure className={styles.figure}>
            <img
              src="icons/chakra.svg"
              alt="A ChakraUI icon"
              className={styles.chakra}
            />
            <figcaption className={styles.figcaption}>Chakra-UI</figcaption>
          </figure>
        </a>
        <a
          href="https://styled-components.com/"
          target="_blank"
          className={styles.styled_link}
        >
          <figure className={styles.figure}>
            <img
              src="icons/styled-components.svg"
              alt="A Styled Components icon"
              className={styles.styled}
            />
            <figcaption className={styles.figcaption}>
              <span>Styled</span>
              <span>Components</span>
            </figcaption>
          </figure>
        </a>
        {/* </div> */}
      </article>
      <DownArrow href="#projects" />
    </section>
  );
};

export default Techs;
