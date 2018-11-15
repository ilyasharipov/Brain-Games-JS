import { cons } from 'hexlet-pairs';
import startGame from '../gameengine';
import { randomOpr, getRandomNum } from '../mathlib';

const info = 'What is the result of the expression?';

const rightOpr = (a, b, c) => {
  switch (c) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const playRound = () => {
  const num1 = getRandomNum(1, 20);
  const num2 = getRandomNum(1, 20);
  const operator = randomOpr();
  const question = `${num1}${operator}${num2}`;
  const rightAnswer = rightOpr(num1, num2, operator);

  return cons(question, rightAnswer);
};

export default () => startGame(info, playRound);
