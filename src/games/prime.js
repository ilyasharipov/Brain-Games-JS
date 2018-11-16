import { cons } from 'hexlet-pairs';
import startGame from '../gameEngine';
import getRandomNum from '../utils';

const info = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; num > i; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const generateGameData = () => {
  const randomNum = getRandomNum(1, 100);
  const question = `${randomNum}`;
  const rightAnswer = isPrime(randomNum) ? 'yes' : 'no';

  return cons(question, rightAnswer);
};

export default () => startGame(info, generateGameData);
