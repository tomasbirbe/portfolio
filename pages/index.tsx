import styles from './styles/Home.module.css';

import Intro from './components/Intro/Intro';
import About from './components/About/About';

export default function Home() {
  return (
    <main>
      <Intro />
      <About />
    </main>
  );
}
