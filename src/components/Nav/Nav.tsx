import { useLang } from 'context/langContext';
import { useState, useEffect } from 'react';
import { api } from 'services/api';

import NavLink from './NavLink';

interface Data {
  intro: string;
  aboutMe: string;
  technologies: string;
  projects: {
    title: string;
    blommy: string;
    smallKeeper: string;
    twitterClone: string;
  };
  contact: string;
}

const INITIAL_DATA: Data = {
  intro: '',
  aboutMe: '',
  technologies: '',
  projects: {
    title: '',
    blommy: '',
    smallKeeper: '',
    twitterClone: '',
  },
  contact: '',
};

const Nav = () => {
  const [lang, setLang] = useLang();
  const [data, setData] = useState<Data>(INITIAL_DATA);

  useEffect(() => {
    setData(api.get.nav(lang));
  }, [lang]);

  return (
    <nav className="hidden font-light lg:flex lg:justify-around lg:items-center lg:sticky w-full outline outline-1	outline-rhythm h-[70px] px-4 z-[1] bg-raisin-black">
      <ul className="flex flex-row gap-4 w-full items-center">
        <NavLink aria-label="Ir a la seccion Introduccion" href="#intro">
          {data.intro}
        </NavLink>
        <NavLink aria-label="Ir a la seccion Sobre Mi" href="#about-me">
          {data.aboutMe}
        </NavLink>
        <NavLink aria-label="Ir a la seccion Tecnologias" href="#techs">
          {data.technologies}
        </NavLink>
        <NavLink aria-label="Ir a la seccion Proyectos" href="#projects">
          {data.projects.title}
          <div className="overlay-subnav">
            <ul className="subnav">
              <NavLink aria-label="Ir a la seccion Proyectos: Blommy" href="#blommy">
                {data.projects.blommy}
              </NavLink>
              <NavLink aria-label="Ir a la seccion Proyectos: Small Keeper" href="#small-keeper">
                {data.projects.smallKeeper}
              </NavLink>
              <NavLink aria-label="Ir a la seccion Proyectos: Twitter Clone" href="#twitter-clone">
                {data.projects.twitterClone}
              </NavLink>
            </ul>
          </div>
        </NavLink>
        <NavLink aria-label="Ir a la seccion Contacto" href="#contact">
          {data.contact}
        </NavLink>
      </ul>
      <select
        className="h-fit w-[150px] px-2 text-left py-2 bg-transparent border-[1px] border-font-primary rounded-xl"
        defaultValue="en"
        onChange={(e) => setLang(e.target.value)}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </nav>
  );
};

export default Nav;
