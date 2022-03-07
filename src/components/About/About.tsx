import { DownArrow } from '../Icons';

export default function About() {
  return (
    <section className="page gap-10 px-8" id="about-me">
      <h2>Sobre mi</h2>
      <article className="flex flex-col max-w-[500px] text-center items-center gap-8">
        <span>
          En 2018 empece a estudiar Ingenieria en Sistemas con mucho entusiasmo pero por cuestiones
          de la pandemia tuve que suspender el cursado por tiempo indeterminado.
        </span>
        <span>
          A pesar de las consecuencias negativas de la pandemia, para mi fue una oportunidad para
          incursionar en el desarrollo web y aprender las tecnologias que se utliizan.
        </span>
        <span>
          ¿Tecnologias? ¡Cierto las{' '}
          <a aria-label="Ir a la pagina de Tecnologias" className="font-bold" href="#techs">
            tecnologias!
          </a>
        </span>
      </article>
      <DownArrow href="#techs" />
    </section>
  );
}
