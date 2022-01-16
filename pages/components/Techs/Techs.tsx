import React from 'react';
import styles from './Techs.module.css';
import { Ts } from '../Icons';

const Techs = () => {
  return (
    <section className={styles.container} id="techs">
      <h1>Tecnologias</h1>
      <article className={styles.techs}>
        <div className={styles.icons_1}>
          <a href="https://www.typescriptlang.org/">
            <img
              src="icons/ts.png"
              alt="A TypeScript Icon"
              className={styles.ts}
            />
          </a>
        </div>
        <div className={styles.icons_2}></div>
        <div className={styles.icons_3}></div>
      </article>
    </section>
  );
};

export default Techs;
