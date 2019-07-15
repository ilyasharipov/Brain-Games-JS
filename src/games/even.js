import { cons } from 'hexlet-pairs';
import startGame from '../gameEngine';
import getRandomNum from '../utils';

const info = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const generateGameData = () => {
  const question = getRandomNum(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question, rightAnswer);
};

export default () => startGame(info, generateGameData);
