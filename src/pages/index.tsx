import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from './Home.module.css';

import Intro from 'components/Intro/Intro';
import About from 'components/About/About';
import Techs from 'components/Techs/Techs';
import Projects from 'components/Projects/Projects';
import TwitterClone from 'components/Projects/TwitterClone/TwitterClone';
import Calculator from 'components/Projects/Calculator/Calculator';
import Contact from 'components/Contact/Contact';
import Drawer from 'components/General/Drawer';
import Nav from 'components/General/Nav';
import useToggle from 'hooks/useToggle';

export default function Home() {
  const { onOpen, onClose, isOpen } = useToggle();

  useEffect(() => {
    const vh = window.innerHeight;
    document.documentElement.style.setProperty('--height', vh + 'px');
  }, []);

  return (
    <main className={styles.container}>
      <Head>
        <title>Portafolio: Tomas Birbe</title>
        <meta
          property="description"
          content="          Mi nombre es Tomas Birbe. Espero mostrarte quien soy y que hago con
          este portfolio para que puedas conocer a tu proximo compañero de
          trabajo!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <Nav />
      <Intro />
      <About />
      <Techs />
      <Projects />
      <TwitterClone />
      <Calculator />
      <Contact />
      <Drawer isOpen={isOpen} onClose={onClose} />
      <button type="button" className={styles.menuButton} onClick={onOpen}>
        <span className={styles.menu} />
      </button>
    </main>
  );
}
