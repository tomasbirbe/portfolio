import NavLink from './NavLink';

const Nav = () => {
  return (
    <nav className="hidden lg:flex lg:sticky w-full outline outline-1	outline-rhythm h-[70px] px-4 z-[1] bg-raisin-black">
      <ul className="flex flex-row gap-4 text-white w-full items-center">
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
    </nav>
  );
};

export default Nav;
