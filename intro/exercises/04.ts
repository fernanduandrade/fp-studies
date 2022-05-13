import {
  compose, path, sort, map, filter,
} from 'ramda';
import carrinho from '../../db/cart.json';

// Retornar o item mais barato da lista
const getPrice = path(['price']) as any;
const getName = (obj: any) => obj[0].name;
const getLowestPrice = compose(
  sort((a: number, b: number) => a - b),
  map(getPrice),
);

const sortedByPrice = getLowestPrice(carrinho);

const getNameOfLowestPrice = (price: number) => compose(
  getName,
  filter((item: any) => item.price === price),
);

console.log(getNameOfLowestPrice(sortedByPrice[0])(carrinho));
