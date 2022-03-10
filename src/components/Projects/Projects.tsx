import { DownArrow } from '../Icons';

function Projects() {
  return (
    <section className="page gap-14" id="projects">
      <h2>Proyectos</h2>
      <article className="flex flex-col max-w-[600px] px-6 text-center gap-8">
        <span>
          Ahora que le diste un vistazo a algunas de las tecnologias con las que me siento comodo,
          me gustaria que veas algunas cosas que hice con estas herramientas (y otras más)
        </span>
        <span>
          Todos los proyectos que encuentres estan en produccion y podes acceder a cada uno de ellos
          clickando en el titulo o en la vista previa.
        </span>
        <span>¡Espero los disfrutes tanto como yo!</span>
      </article>
      <DownArrow href="#blommy" />
    </section>
  );
}

export default Projects;
