import { markup } from './markup';

export const render = {
  refs: {
    gallery: document.querySelector(`.gallery`),
    details: document.querySelector(`.details__info`),
    genre: document.querySelector(`.genre-list`),
  },

  galleryCards(data) {
    data.map(element =>
      this.refs.gallery.insertAdjacentHTML(
        `beforeend`,
        markup.galleryCard(element)
      )
    );
  },

  details(data) {
    this.refs.details.replaceChildren('');
    this.refs.details.insertAdjacentHTML(`beforeend`, markup.details(data));
  },

  genreList(data) {
    data.map(element =>
      this.refs.genre.insertAdjacentHTML(`beforeend`, markup.genreList(element))
    );
  },
};
