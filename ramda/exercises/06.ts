import {
  compose, filter, map, prop, median,
} from 'ramda';
import employees from '../../db/employees.json';

const toUSD = (amount: number) => amount.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});

const getMedianPayCheck = compose(
  toUSD,
  (amount: number) => amount / 12,
  median,
  filter((amount: number) => amount >= 100000) as any,
  map(prop('salary') as any),
);

const result = getMedianPayCheck(employees);
console.log(result);
