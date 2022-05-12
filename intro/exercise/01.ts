import { test } from 'ramda';

// match regex
const countBobo = test(/bobo/ig);
const result = countBobo('fernando');
console.log(result);
