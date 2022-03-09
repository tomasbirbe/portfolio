import Image from 'next/image';
import Link from 'next/link';

import { DownArrow } from '../../Icons';

const Calculator = () => {
  return (
    <section className="page" id="twitter-clone">
      <article className="flex flex-row text-center md:gap-12 xl:gap-[8em] items-center justify-between">
        <Link href="https://tb-twitter.vercel.app/">
          <a className="hidden hover:scale-110 transition-all hover:shadow-xl hover: md:block md:w-[350px] md:h-[350px] lg:w-[500px] xl:w-[600px] relative">
            <Image
              alt="An image preview of Twitter Clone App"
              className="object-cover rounded-2xl w-[200px]"
              layout="fill"
              loading="lazy"
              src="/twitter-clone.webp"
            />
          </a>
        </Link>
        <div className="flex h-full flex-col gap-8 items-center justify-between">
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
          <div className="max-w-[370px] min-w-[250px]">
            Este proyecto es una calculadora que puede guardar y mostrar valores definidos por el
            usuario. Uno de los primeros proyectos que me ayudo a ganar experiencia con CSS Grid,
            React y LocalStorage.
          </div>
          <div className="flex gap-3 flex-wrap w-[150px]">
            <Image
              alt="Logo de ChakraUI"
              height={40}
              loading="lazy"
              src="/icons/chakra.svg"
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
              alt="Logo de TypeScript"
              height={40}
              loading="lazy"
              src="/icons/ts.svg"
              width={40}
            />
          </div>
        </div>
      </article>
      <DownArrow href="#calculator" />
    </section>
  );
};

export default Calculator;
