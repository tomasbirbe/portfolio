import React from 'react';
import Image from 'next/image';

import { DownArrow } from '../Icons';

const Techs = () => {
  return (
    <section className="page gap-[4em]" id="techs">
      <h2>Tecnologias</h2>
      <article className="grid grid-cols-2 md:grid-cols-3 content-center gap-y-16 gap-x-6">
        <a
          aria-label="Ir a la documentacion de TypeScript"
          href="https://www.typescriptlang.org/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <figure>
            <Image
              alt="Logo de TypeScript"
              height={60}
              loading="lazy"
              src="/icons/ts.svg"
              width={60}
            />
            <figcaption>TypeScript</figcaption>
          </figure>
        </a>
        <a
          aria-label="Ir a la documentacion de React"
          href="https://reactjs.org/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <figure>
            <Image
              alt="Logo de React"
              height={60}
              loading="lazy"
              src="/icons/react.svg"
              width={60}
            />
            <figcaption>React</figcaption>
          </figure>
        </a>
        <a
          aria-label="Ir a la documentacion de JavaScript"
          href="https://developer.mozilla.org/en-US/docs/Web/javascript"
          rel="noreferrer noopener"
          target="_blank"
        >
          <figure>
            <Image
              alt="Logo de JavaScript"
              height={60}
              loading="lazy"
              src="/icons/js.svg"
              width={60}
            />
            <figcaption>JavaScript</figcaption>
          </figure>
        </a>
        <a
          aria-label="Ir a la documentacion de HTML"
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          rel="noreferrer noopener"
          target="_blank"
        >
          <figure>
            <Image alt="Logo de HTML" height={60} loading="lazy" src="/icons/html.svg" width={60} />
            <figcaption>HTML</figcaption>
          </figure>
        </a>
        <a
          aria-label="Ir a la documentacion de CSS"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          rel="noreferrer noopener"
          target="_blank"
        >
          <figure>
            <Image alt="Logo de CSS" height={60} src="/icons/css.svg" width={60} />
            <figcaption>CSS</figcaption>
          </figure>
        </a>
        <a
          aria-label="Ir a la documentacion de Git"
          href="https://git-scm.com/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <figure>
            <Image alt="Logo de Git" height={60} src="/icons/git.svg" width={60} />
            <figcaption>Git</figcaption>
          </figure>
        </a>
      </article>
      <DownArrow href="#projects" />
    </section>
  );
};

export default Techs;
