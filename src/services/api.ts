import * as intro from '../data/intro.json';
import * as about from '../data/about.json';
import * as techs from '../data/techs.json';
import * as projects from '../data/projects.json';
import * as blommy from '../data/blommy.json';
import * as smallKeeper from '../data/small-keeper.json';
import * as twitterClone from '../data/twitter-clone.json';
import * as contact from '../data/contact.json';
import * as nav from '../data/nav.json';

export const api = {
  get: {
    intro: (lang) => {
      return intro[lang];
    },
    about: (lang) => {
      return about[lang];
    },
    techs: (lang) => {
      return techs[lang];
    },
    projects: (lang) => {
      return projects[lang];
    },
    blommy: (lang) => {
      return blommy[lang];
    },
    smallKeeper: (lang) => {
      return smallKeeper[lang];
    },
    twitterClone: (lang) => {
      return twitterClone[lang];
    },
    contact: (lang) => {
      return contact[lang];
    },
    nav: (lang) => {
      return nav[lang];
    },
  },
};
