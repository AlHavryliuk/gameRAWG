import { clear } from './clear';
import { GameAPI } from './gameAPI';
import { render } from './render';
import { visual } from './visualController';

const gameApi = new GameAPI();

export const load = {
  startPage() {
    visual.hidden(`.undo`);
    clear.allSelectors(`.gallery-card`);
    gameApi.page = 1;
    this.gameList();
  },

  nextPage(activePage) {
    gameApi.page++;
    // if (gameApi.page > 1) {
      // visual.show(`.undo`);
    // }
    switch (activePage) {
      case `home`:
        this.gameList();
        break;
      case `genres`:
        this.gameListByGenre(gameApi.genre, gameApi.page);
    }
  },

  // previousPage(activePage) {
  //   gameApi.page--;
  //   if (gameApi.page === 1) {
  //     visual.hidden(`.undo`);
  //   }
  //   switch (activePage) {
  //     case `home`:
  //       this.gameList();
  //       break;
  //     case `genres`:
  //       this.gameListByGenre(gameApi.genre, gameApi.page);
  //   }
  // },

  async gameList() {
    const {
      data: { results },
    } = await gameApi.getGames();
    render.galleryCards(results);
  },

  async gameListByGenre(genre, page = 1) {
    gameApi.page = page;
    gameApi.genre = genre;
    // if (gameApi.page === 1) {
    //   visual.hidden(`.undo`);
    // }
    const {
      data: { results },
    } = await gameApi.getGamesByGenre();
    render.galleryCards(results);
  },

  async details(id) {
    gameApi.query = id;
    const { data } = await gameApi.getDetails();
    render.details(data);
  },

  async genres() {
    const {
      data: { results },
    } = await gameApi.getGenres();
    render.genreList(results);
  },
};
