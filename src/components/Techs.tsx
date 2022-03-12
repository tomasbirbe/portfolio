import React from 'react';
import Image from 'next/image';

import { DownArrow } from './Icons';

const Techs = () => {
  return (
    <section className="page pb-[4em] gap-[3em]" id="techs">
      <h2>Tecnologias</h2>
      <article className="grid grid-cols-2 sm:grid-cols-3 content-center gap-y-10 sm:gap-y-16 gap-x-6">
        <a
          aria-label="Ir a la documentacion de TypeScript"
          href="https://www.typescriptlang.org/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <figure className="flex flex-col justify-center items-center">
            <div className="relative w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]">
              <Image alt="Logo de TypeScript" layout="fill" loading="lazy" src="/icons/ts.svg" />
            </div>
            <figcaption>TypeScript</figcaption>
          </figure>
        </a>
        <a
          aria-label="Ir a la documentacion de React"
          href="https://reactjs.org/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <figure className="flex flex-col justify-center items-center">
            <div className="relative w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]">
              <Image alt="Logo de React" layout="fill" loading="lazy" src="/icons/react.svg" />
            </div>
            <figcaption>React</figcaption>
          </figure>
        </a>
        <a
          aria-label="Ir a la documentacion de JavaScript"
          href="https://developer.mozilla.org/en-US/docs/Web/javascript"
          rel="noreferrer noopener"
          target="_blank"
        >
          <figure className="flex flex-col justify-center items-center">
            <div className="relative w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]">
              <Image alt="Logo de JavaScript" layout="fill" loading="lazy" src="/icons/js.svg" />
            </div>
            <figcaption>JavaScript</figcaption>
          </figure>
        </a>
        <a
          aria-label="Ir a la documentacion de HTML"
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          rel="noreferrer noopener"
          target="_blank"
        >
          <figure className="flex flex-col justify-center items-center">
            <div className="relative w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]">
              <Image alt="Logo de HTML" layout="fill" loading="lazy" src="/icons/html.svg" />
            </div>
            <figcaption>HTML</figcaption>
          </figure>
        </a>
        <a
          aria-label="Ir a la documentacion de CSS"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          rel="noreferrer noopener"
          target="_blank"
        >
          <figure className="flex flex-col justify-center items-center">
            <div className="relative w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]">
              <Image alt="Logo de CSS" layout="fill" src="/icons/css.svg" />
            </div>
            <figcaption>CSS</figcaption>
          </figure>
        </a>
        <a
          aria-label="Ir a la documentacion de Git"
          href="https://git-scm.com/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <figure className="flex flex-col justify-center items-center">
            <div className="relative w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]">
              <Image alt="Logo de Git" layout="fill" src="/icons/git.svg" />
            </div>
            <figcaption>Git</figcaption>
          </figure>
        </a>
      </article>
      <DownArrow href="#projects" />
    </section>
  );
};

export default Techs;
