import { menu } from './menu';

const getElement = selector => document.querySelector(selector);

export const listeners = {
  addDefault() {
    getElement(`.main-section`).addEventListener(`click`, menu.controller);
    getElement(`.header`).addEventListener(`click`, menu.controller);
  },
};
