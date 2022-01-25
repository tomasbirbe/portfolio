import { useState } from 'react';
import styles from './Home.module.css';

import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Techs from './components/Techs/Techs';
import Projects from './components/Projects/Projects';
import TwitterClone from './components/Projects/TwitterClone/TwitterClone';
import Calculator from './components/Projects/Calculator/Calculator';
import Contact from './components/Contact/Contact';
import Drawer from './components/General/Drawer';
import Nav from './components/General/Nav';
import useToggle from './hooks/useToggle';

export default function Home() {
  const { onOpen, onClose, isOpen } = useToggle();

  return (
    <main className={styles.container}>
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
