import {
  slice, sort, pipe,
} from 'ramda';
import menu from '../../db/cart.json';

const getTop3MealsFor = pipe(
  (maxPrice: number, cardapio: any) => cardapio.filter((item: any) => item.price <= maxPrice),
  sort((a: any, b: any) => b.rating - a.rating) as any,
  slice(0, 3),
);

console.log(getTop3MealsFor(12, menu));
