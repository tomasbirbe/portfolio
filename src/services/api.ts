import * as intro from '../data/intro.json';

export const api = {
  get: {
    intro: (lang) => {
      return intro[lang];
    },
  },
};
