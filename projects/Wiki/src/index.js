import 'bootstrap/dist/css/bootstrap.min.css';
import { pipe } from 'ramda';
import getWikiUrl from './getWikiUrl';
import getInputValue from './getInputValue';
import store from './store';

const render = (markup) => {
  const resultsElement = document.getElementById('results');
  resultsElement.innerHTML += markup;
};

const searchUrlFromInput = pipe(
  getInputValue,
  getWikiUrl,
  (url) => fetch(url).then((res) => res.json()).then(store).then(render),
);
const userInput = document.querySelector('input');

userInput.addEventListener('keyup', searchUrlFromInput);
