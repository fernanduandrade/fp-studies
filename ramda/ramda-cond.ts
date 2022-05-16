import {
  equals, cond, always,
} from 'ramda';

const isNumber = cond([
  [equals(4), always('is a 4')],
  [equals(5), always('it is a 5')],
  [equals(6), always('it is a 6')],
  [equals(7), always('it is a 7')],
  [always(true), always('Number not found, sorry...')],
]);

console.log(isNumber(61));
