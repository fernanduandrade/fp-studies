import 'bootstrap/dist/css/bootstrap.min.css';
import { pipe, ifElse, isEmpty } from 'ramda';
import getWikiUrl from './getWikiUrl';
import getInputValue from './getInputValue';
import store from './store';

const render = (markup) => {
  const resultsElement = document.getElementById('results');
  resultsElement.innerHTML += markup;
};

const doNothing = () => {};

const searchUrlFromInput = pipe(
  getWikiUrl,
  (url) => fetch(url).then((res) => res.json()).then(store).then(render),
);

const makeSearchRequestIfValid = pipe(
  getInputValue,
  ifElse(isEmpty, doNothing, searchUrlFromInput),
);
const userInput = document.querySelector('input');

userInput.addEventListener('keyup', makeSearchRequestIfValid);
