import {
  compose, path, sum, map,
} from 'ramda';
import carrinho from '../../db/cart.json';

// Calcular o total do carrinho de compra em dolar
const getPrice = path(['price']) as any;

const toUSD = (amount: number) => amount.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});

const getTotalPrice = compose(
  toUSD,
  sum,
  map(getPrice),
);

console.log(getTotalPrice(carrinho));
