import { useLang } from 'context/langContext';

import NavLink from './NavLink';

const Nav = () => {
  const [, setLang] = useLang();

  return (
    <nav className="hidden font-light lg:flex lg:justify-around lg:items-center lg:sticky w-full outline outline-1	outline-rhythm h-[70px] px-4 z-[1] bg-raisin-black">
      <ul className="flex flex-row gap-4 w-full items-center">
        <NavLink aria-label="Ir a la seccion Introduccion" href="#intro">
          Introduccion
        </NavLink>
        <NavLink aria-label="Ir a la seccion Sobre Mi" href="#about-me">
          Sobre mi
        </NavLink>
        <NavLink aria-label="Ir a la seccion Tecnologias" href="#techs">
          Tecnologias
        </NavLink>
        <NavLink aria-label="Ir a la seccion Proyectos" href="#projects">
          Proyectos
          <div className="overlay-subnav">
            <ul className="subnav">
              <NavLink aria-label="Ir a la seccion Proyectos: Blommy" href="#blommy">
                Blommy
              </NavLink>
              <NavLink aria-label="Ir a la seccion Proyectos: Small Keeper" href="#small-keeper">
                Small Keeper
              </NavLink>
              <NavLink aria-label="Ir a la seccion Proyectos: Twitter Clone" href="#twitter-clone">
                Twitter Clone
              </NavLink>
              <NavLink aria-label="Ir a la seccion Proyectos: Calculadora" href="#calculator">
                Calculadora
              </NavLink>
            </ul>
          </div>
        </NavLink>
        <NavLink aria-label="Ir a la seccion Contacto" href="#contact">
          Contacto
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
