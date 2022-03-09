import Head from 'next/head';
import dynamic from 'next/dynamic';
import useToggle from 'hooks/useToggle';
import Image from 'next/image';
import Blommy from 'components/Projects/Blommy/Blommy';

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
      <div className="h-[100vh] flex-col flex">
        <Nav />
        <main>
          <Intro />
          <About />
          <Techs />
          <Projects />
          <Blommy />
          <TwitterClone />
          <Calculator />
          <Contact />
          <Drawer isOpen={isOpen} onClose={onClose} />
          <button
            aria-label="Abrir el menu de navegacion"
            className="absolute lg:hidden top-[25px] left-[25px] hover:bg-independence rounded-full p-2 flex justify-center items-center transition-all duration-200"
            type="button"
            onClick={onOpen}
          >
            <Image height={30} src="/icons/menu.svg" width={30} />
          </button>
        </main>
      </div>
    </>
  );
}
