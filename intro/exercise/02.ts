import {
  both, gte, filter, propSatisfies, lte,
} from 'ramda';
import peopleList from '../../db/people.json';
// retornar se uma pessoa é entre 18 à 25

const validAge = both(gte(18), lte(25));
const isValidAge = propSatisfies(validAge, 'age');

const result = filter(isValidAge)(peopleList);
console.log(result);
