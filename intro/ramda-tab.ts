import { tap, pipe } from 'ramda';

const double = (num: number) => num * 2;
const triple = (num: number) => num * 3;
const square = (num: number) => num * num;
const increment = (num: number) => num + 1;

const doMath = pipe(
  tap((num) => console.log('initial: ', num)),
  double,
  tap((num) => console.log('double: ', num)),
  triple,
  tap((num) => console.log('triple: ', num)),
  square,
  tap((num) => console.log('square: ', num)),
  increment,
  tap((num) => console.log('increment: ', num)),
);

const result = doMath(2);

console.log(result);
