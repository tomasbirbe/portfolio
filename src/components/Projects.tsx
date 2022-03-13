import { useLang } from 'context/langContext';
import { useState, useEffect } from 'react';
import { api } from 'services/api';

import { DownArrow } from './Icons';

interface Data {
  title: string;
}

const INITIAL_DATA: Data = {
  title: '',
};

function Projects() {
  const [lang] = useLang();
  const [data, setData] = useState<Data>(INITIAL_DATA);

  useEffect(() => {
    setData(api.get.projects(lang));
  }, [lang]);

  return (
    <section className="page gap-8" id="projects">
      <h2 className="text-5xl">{data.title}</h2>
      {/* <article className="flex flex-col max-w-[600px] px-6 text-center gap-8">
        <span>
          Ahora que le diste un vistazo a algunas de las tecnologias con las que me siento comodo,
          me gustaria que veas algunas cosas que hice con estas herramientas (y otras más)
        </span>
        <span>
          Todos los proyectos que encuentres estan en produccion y podes acceder a cada uno de ellos
          clickando en el titulo o en la imagen de muestra
        </span>
        <span>¡Espero los disfrutes tanto como yo!</span>
      </article> */}
      <DownArrow href="#blommy" />
    </section>
  );
}

export default Projects;
