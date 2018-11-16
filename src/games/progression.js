import { cons } from 'hexlet-pairs';
import startGame from '../gameEngine';
import getRandomNum from '../utils';

const info = 'What number is missing in the progression?';

const lengthProgression = 10;

const generateGameData = () => {
  const firstNum = getRandomNum(1, 100);
  const step = getRandomNum(1, 10);
  const progression = [];

  for (let i = 1; i <= lengthProgression; i += 1) {
    progression.push(firstNum + i * step);
  }
  const hiddenElement = getRandomNum(1, lengthProgression);

  const rightAnswer = progression[hiddenElement];
  progression[hiddenElement] = '..';

  const question = `${progression.join(' ')}`;

  return cons(question, rightAnswer);
};

export default () => startGame(info, generateGameData);
