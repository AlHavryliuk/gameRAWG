import axios from 'axios';

export class GameAPI {
  static API_KEY = `9f304c35537248a993f42a0dbc804f07`;
  static BASE_URL = `https://api.rawg.io/api`;
  static BASE_GAME_URL = `https://api.rawg.io/api/games`;
  static PAGE_SIZE = 8;

  constructor() {
    this.page = 1;
    this.query = null;
    this.genre = null;
  }

  async getGames() {
    const result = await axios.get(`${GameAPI.BASE_GAME_URL}`, {
      params: {
        key: GameAPI.API_KEY,
        page: this.page,
        page_size: GameAPI.PAGE_SIZE,
      },
    });
    return result;
  }

  async getGamesByGenre() {
    const result = await axios.get(`${GameAPI.BASE_GAME_URL}`, {
      params: {
        key: GameAPI.API_KEY,
        page: this.page,
        genres: this.genre,
        page_size: GameAPI.PAGE_SIZE,
      },
    });
    return result;
  }

  async getDetails() {
    const result = await axios.get(`${GameAPI.BASE_GAME_URL}/${this.query}`, {
      params: { key: GameAPI.API_KEY, page_size: GameAPI.PAGE_SIZE },
    });
    return result;
  }

  async getGenres() {
    const result = await axios.get(`${GameAPI.BASE_URL}/genres`, {
      params: { key: GameAPI.API_KEY },
    });
    return result;
  }
}
