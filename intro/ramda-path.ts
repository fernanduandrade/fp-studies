import {
  path, sort, ascend,
} from 'ramda';
import people from '../db/people2.json';

const getPersonHeight = path(['metadata', 'attributes', 'height', 'value']) as any;

const filterByHeight = ascend(getPersonHeight);

console.log(sort(filterByHeight, people));
