import {
  lensPath, map, over, pipe, toUpper, view,
} from 'ramda';
import employees from '../../../db/employees02.json';

const favoriteFlavorPath = lensPath(['interests', 'foods', 'sweets', 'iceCream', 'favoriteFlavor']);

const upperCaseFlavors = pipe(
  toUpper,
  (flavor: string) => `${flavor} IS A GREAT FLAVOR`,
);
// const getFavoriteFlavorPath = map(zipObj(['flavor']));
const modifiedEmployees = map(over(favoriteFlavorPath, upperCaseFlavors), employees);
const result1 = map(view(favoriteFlavorPath), modifiedEmployees);
console.log(result1);
