import { cons } from 'hexlet-pairs';
import startGame from '../gameEngine';
import getRandomNum from '../utils';

const info = 'Find the greatest common divisor of given numbers.';

const performGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return performGcd(b, a % b);
};

const generateGameData = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = String(performGcd(num1, num2));

  return cons(question, rightAnswer);
};

export default () => startGame(info, generateGameData);
