import { sort } from 'ramda';

const numeros = [1, 2, 41, 21, 23, 11, 5, 7, 8, 19, 9, 32];

const result = sort((a, b) => a - b, numeros);

console.log(numeros);
console.log(result);
