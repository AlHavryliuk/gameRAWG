import { dateFormatter } from './dateFormatter';
import platforms from '../images/platforms.svg';

export const markup = {
  galleryCard({
    id,
    background_image,
    name,
    rating,
    released,
    parent_platforms,
    genres,
    metacritic,
  }) {
    const genre = getGenreList(genres);
    const avaliblePlatform = markup.platformList(parent_platforms);
    return `<li class="gallery-card">
    <div class="gallery-card__wrapper">
    <img class="gallery-card__img" src="${background_image}">
    <div class="gallery-card__info">
        <p>
            <span class="gallery-card__info-title">${name}</span>
            <span class="gallery-card__info-rate">${rating}</span>
        </p>
    </div>
        <div class="gallery-card__hover-slide">
            <ul class="gallery-card__hover-infoList"> 
                <li>Released data:</li>
                <li>${dateFormatter(released)}</li>
                <li>Metascore:</li>
                <li>${metacritic}</li>
                <li>Genres:</li>
                <li>${genre}</li>
                <li>Platforms:</li>
                <li class="gallery-card__hover-svg">${avaliblePlatform}</li>
            </ul>
            <ul class="gallery-card__hover-btnWrapper">
                <li>
                  <button data-action="showLearnMore" data-game-id="${id}"> Learn more </button>
                </li>
                <li>
                  <button data-action="hideGame" data-game-id="${id}"> Hide game </button>
                </li>
            </ul>
        </div>
    </div>
    </li>`;
  },

  details({
    background_image,
    name,
    released,
    parent_platforms,
    genres,
    tags,
    description_raw,
  }) {
    const genre = getGenreList(genres);
    const avaliblePlatform = markup.platformList(parent_platforms);
    return `<div class="details__image-wrapper">
              <img src="${background_image}" alt="${name}">
              <p>Tags:</p>
              <p>${getTags(tags)}</p>
            </div>
            <div class="details__info-text">
              <h1>${name}</h1>
                <ul class="details__info-list">
                  <li>Release date:</li>
                  <li>${dateFormatter(released)}</li>
                  <li>Genres:</li>
                  <li>${genre}</li>    
                  <li>Platforms:</li>
                  <li class="gallery-card__hover-svg">${avaliblePlatform}</li>
                 
                </ul>
                <p>Description:</p>
                <p>${description_raw}</p>
            </div>`;
  },

  genreList({ id, image_background, name }) {
    return `<div class="genre-list__block" data-genre-id="${id}" data-action="getGamesByGenre">
    <img src="${image_background}" alt="">
      <span class="genre-list__title">${name}</span>
    </div>`;
  },

  platformList(platformList) {
    return platformList
      .map(element => {
        let platformName = element.platform.slug.toLowerCase();
        return `<svg width="23" height="23">
                    <use href="${platforms}#icon-${platformName}"></use>
                </svg>`;
      })
      .join('');
  },
};

const getGenreList = genres => {
  const genreName = genres.map(element => element.name);
  return genreName.join(', ');
};

const getTags = tags => {
  return tags.map(element => `#` + element.slug).join(', ');
};
