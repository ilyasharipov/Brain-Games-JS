import { cons } from 'hexlet-pairs';
import startGame from '../gameEngine';
import getRandomNum from '../utils';

const info = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const performOperation = (a, b, c) => {
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

const generateGameData = () => {
  const num1 = getRandomNum(1, 20);
  const num2 = getRandomNum(1, 20);
  const operator = operators[getRandomNum(Math.floor(Math.random()), operators.length - 1)];
  const question = `${num1}${operator}${num2}`;
  const rightAnswer = performOperation(num1, num2, operator);

  return cons(question, rightAnswer);
};

export default () => startGame(info, generateGameData);
