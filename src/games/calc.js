import { cons } from 'hexlet-pairs';
import startGame from '../gameengine';
import getRandomNum from '../utils';

const info = 'What is the result of the expression?';

const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const str = operators[Math.floor(Math.random() * 3)];
  return str;
};

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
  const operator = randomOperator();
  const question = `${num1}${operator}${num2}`;
  const rightAnswer = performOperation(num1, num2, operator);

  return cons(question, rightAnswer);
};

export default () => startGame(info, generateGameData);
