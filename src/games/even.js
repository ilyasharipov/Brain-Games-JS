import { cons } from 'hexlet-pairs';
import startGame from '../gameengine';
import getRandomNum from '../utils';

const info = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const generateGameData = () => {
  const randomNum = getRandomNum(1, 100);
  const question = `${randomNum}`;
  const rightAnswer = isEven(randomNum) ? 'yes' : 'no';

  return cons(question, rightAnswer);
};

export default () => startGame(info, generateGameData);
