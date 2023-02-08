import { clear } from './clear';
import { load } from './loadGames';
import { visual } from './visualController';

export const menu = {
  activePage: `home`,

  hideGame(event) {
    event.target.closest(`.gallery-card`).classList.add(`isHidden`);
  },
  showLearnMore({ target }) {
    const id = target.dataset.gameId;
    load.details(id);
    visual.toggle(`.details`, `.gallery`);
  },

  closeDetails() {
    visual.toggle(`.details`, `.gallery`);
  },

  openGenreList() {
    this.activePage = `genres`;
    clear.selector(`.genre-list`);
    visual.disactive(`[data-action="openHome"]`);
    visual.active(`[data-action="openGenreList"]`);
    visual.hidden(`.details`, `.gallery`);
    visual.show(`.genre-list`);
    load.genres();
  },

  openHome() {
    this.activePage = `home`;
    visual.disactive(`[data-action="openGenreList"]`);
    visual.active(`[data-action="openHome"]`);
    visual.hidden(`.genre-list`, `.details`);
    visual.show(`.gallery`);
    load.startPage();
  },

  nextPage() {
    clear.allSelectors(`.gallery-card`);
    load.nextPage(this.activePage);
  },

  prevPage() {
    clear.allSelectors(`.gallery-card`);
    load.previousPage(this.activePage);
  },

  getGamesByGenre({ target }) {
    const id = target.dataset.genreId;
    clear.allSelectors(`.gallery-card`);
    load.gameListByGenre(id);
    visual.hidden(`.genre-list`);
    visual.show(`.gallery`);
  },

  controller(event) {
    const action = event.target.dataset.action;
    if (action) {
      menu[action](event);
    }
  },
};
