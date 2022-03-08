import Image from 'next/image';

import { DownArrow } from '../../Icons';
import general from '../general.module.css';

import styles from './Calculator.module.css';

const Calculator = () => {
  return (
    <section className="page" id="calculator">
      <article className="flex flex-row w-[1100px] h-[450px] text-center items-center justify-between">
        <div className="flex h-full flex-col items-center justify-between">
          <h3>
            <a
              aria-label="Ir al proyecto Calculadora"
              className="hover:bg-white hover:text-black p-2 rounded transition-all"
              href="https://tb-calculator.vercel.app/"
              rel="noreferrer noopener"
              target="_blank"
            >
              Calculadora
            </a>
          </h3>
          <div className="w-[350px]">
            Este proyecto es una calculadora que puede guardar y mostrar valores definidos por el
            usuario. Uno de los primeros proyectos que me ayudo a ganar experiencia con CSS Grid,
            React y LocalStorage.
          </div>
          <div className="flex gap-3 flex-wrap w-[150px]">
            <Image
              alt="Logo de Styled Components"
              height={40}
              loading="lazy"
              src="/icons/styled-components.svg"
              width={40}
            />
            <Image
              alt="Logo de React"
              height={40}
              loading="lazy"
              src="/icons/react.svg"
              width={40}
            />
            <Image
              alt="Logo de GitHub"
              height={40}
              loading="lazy"
              src="/icons/github.svg"
              width={40}
            />
            <Image alt="Logo de CSS" height={40} loading="lazy" src="/icons/css.svg" width={40} />
            <Image alt="Logo de HTML" height={40} loading="lazy" src="/icons/html.svg" width={40} />
            <Image
              alt="Logo de Styled Components"
              height={40}
              loading="lazy"
              src="/icons/js.svg"
              width={40}
            />
          </div>
        </div>
        <div className="w-[500px]">
          <Image
            alt="An image preview of Calculator App"
            className={general.img}
            height={400}
            layout="responsive"
            loading="lazy"
            src="/calculadora.webp"
            width={800}
          />
        </div>
      </article>
      <DownArrow href="#contact" />
    </section>
  );
};

export default Calculator;
