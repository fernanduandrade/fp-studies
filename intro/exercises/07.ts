import { cond, map } from 'ramda';
import scoreList from '../../db/score.json';

// retornar classificação de uma lista de score

const reviewCreditScore = cond([
  [(score: number) => score >= 800, (score) => `${score} is excellent!`],
  [(score: number) => score >= 700, (score) => `${score} is good!`],
  [(score: number) => score >= 650, (score) => `${score} is fair!`],
  [(score: number) => score <= 649, (score) => `${score} is poor!`],
]);

const resultCreditScore = map(reviewCreditScore);

console.log(resultCreditScore(scoreList));
