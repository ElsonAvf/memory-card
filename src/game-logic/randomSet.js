import {cards} from './cardsObj.js';
import {shuffle} from './shuffle.js';

export const randomSet = length => {
  return shuffle(cards).slice(0, length)
}