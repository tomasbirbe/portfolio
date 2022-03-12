import { DownArrow } from './Icons';

export default function About() {
  return (
    <section className="page gap-10 px-8" id="about-me">
      <h2>Sobre mi</h2>
      <article className="flex flex-col max-w-[500px] text-center items-center gap-8">
        <span>
          Hola! Mi nombre es Tomás, soy&nbsp;{' '}
          <strong className="font-bold">Desarrollador Front-End React</strong>. En mi día a día
          utilizo React, HTML, CSS, JavaScript, Git y bases de datos SQL.
        </span>
        <span>
          Tambien disfruto de aprender y utilizar NodesJS con ExpressJS, NextJS, TypeScript,
          Tailwind y ChakraUI.
        </span>
        <span>
          Mientras tanto en busca de mi primer experienca laboral, ansioso de trabajar en equipo y
          encontrar desafios para ponerme a prueba!
        </span>
      </article>
      <DownArrow href="#techs" />
    </section>
  );
}
