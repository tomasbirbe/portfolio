import { useEffect, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import useToggle from 'hooks/useToggle';

import styles from './Home.module.css';

const Intro = dynamic(() => import('components/Intro/Intro'));
const About = dynamic(() => import('components/About/About'));
const Techs = dynamic(() => import('components/Techs/Techs'));
const Projects = dynamic(() => import('components/Projects/Projects'));
const TwitterClone = dynamic(() => import('components/Projects/TwitterClone/TwitterClone'));
const Calculator = dynamic(() => import('components/Projects/Calculator/Calculator'));
const Contact = dynamic(() => import('components/Contact/Contact'));
const Drawer = dynamic(() => import('components/General/Drawer'));
const Nav = dynamic(() => import('components/General/Nav'));

export default function Home() {
  const { onOpen, onClose, isOpen } = useToggle();

  useEffect(() => {
    const vh = window.innerHeight;

    document.documentElement.style.setProperty('--height', vh + 'px');
  }, []);

  return (
    <>
      <Head>
        <title>Portafolio: Tomas Birbe</title>
        <meta
          content="Mi nombre es Tomas Birbe. Espero mostrarte quien soy y que hago con
          este portfolio para que puedas conocer a tu proximo compañero de
          trabajo!"
          name="description"
        />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta charSet="UTF-8" />
        <link href="https://www.typescriptlang.org/" rel="preconnect" />
        <link href="https://reactjs.org/" rel="preconnect" />
        <link href="https://developer.mozilla.org/en-US/docs/Web/javascript" rel="preconnect" />
        <link href="https://developer.mozilla.org/en-US/docs/Web/HTML" rel="preconnect" />
        <link href="https://developer.mozilla.org/en-US/docs/Web/CSS" rel="preconnect" />
        <link href="https://chakra-ui.com/" rel="preconnect" />
        <link href="https://styled-components.com/" rel="preconnect" />
        <link href="https://tb-calculator.vercel.app/" rel="preconnect" />
        <link href="https://tb-twitter.vercel.app/" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
      </Head>
      <main className={`${styles.container}`}>
        <Nav />
        <Intro />
        <About />
        <Techs />
        <Projects />
        <TwitterClone />
        <Calculator />
        <Contact />
        <Drawer isOpen={isOpen} onClose={onClose} />
        <button
          aria-label="Abrir el menu de navegacion"
          className={styles.menuButton}
          type="button"
          onClick={onOpen}
        >
          <span className={styles.menu} />
        </button>
      </main>
    </>
  );
}
