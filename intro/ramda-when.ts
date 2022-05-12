import { when } from 'ramda';

// a function unless é o oposto do when

const isEven = (num: number) => num % 2 === 0;

const doubleIf = when(
  isEven,
  (num) => num * 2,
);

console.log(
  doubleIf(50),
  doubleIf(51),
);
