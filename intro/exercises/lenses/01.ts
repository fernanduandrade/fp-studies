import {
  view, lensPath, map,
} from 'ramda';
import employees from '../../../db/employees02.json';

const favoriteFlavorPath = lensPath(['interests', 'foods', 'sweets', 'iceCream', 'favoriteFlavor']);

// const getFavoriteFlavorPath = map(zipObj(['flavor']));
const result = map(view(favoriteFlavorPath), employees);
console.log(result);
