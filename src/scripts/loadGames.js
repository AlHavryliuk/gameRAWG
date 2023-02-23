import { clear } from './clear';
import { GameAPI } from './gameAPI';
import { render } from './render';
import { visual } from './visualController';

const gameApi = new GameAPI();

export const load = {
  isLoading: false,

  startPage() {
    visual.show('.under__redo');
    clear.allSelectors(`.gallery-card`);
    gameApi.page = 1;
    this.gameList();
  },

  nextPage(activePage) {
    gameApi.page++;
    switch (activePage) {
      case `home`:
        this.gameList();
        break;
      case `genres`:
        this.gameListByGenre(gameApi.genre, gameApi.page);
    }
  },

  async gameList() {
    try {
      const {
        data: { results },
      } = await gameApi.getGames();
      render.galleryCards(results);
    } catch (error) {
      error.message;
    }
  },

  async gameListByGenre(genre, page = 1) {
    document.querySelector(`.under__redo`).classList.contains(`isHidden`)
      ? visual.show('.under__redo')
      : -1;
    try {
      gameApi.page = page;
      gameApi.genre = genre;
      const {
        data: { results },
      } = await gameApi.getGamesByGenre();
      render.galleryCards(results);
    } catch (error) {
      error.message;
    } finally {
      console.log(`ready`);
    }
  },

  async details(id) {
    try {
      gameApi.query = id;
      const { data } = await gameApi.getDetails();
      render.details(data);
    } catch (error) {
      error.message;
    }
  },

  async genres() {
    try {
      visual.hidden('.under__redo');
      const {
        data: { results },
      } = await gameApi.getGenres();
      render.genreList(results);
    } catch (error) {
      error.message;
    } finally {
    }
  },
};
