import { listeners } from './listeners';
import { load } from './loadGames';

const start = async () => {
  await load.gameList();
  listeners.addDefault();

};

window.addEventListener(`load`, start);
