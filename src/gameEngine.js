import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const lastRound = 3;

const startGame = (info, playRound) => {
  console.log('Welcome to the Brain Games!');
  console.log(info);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let action = 0; action < lastRound; action += 1) {
    const generation = playRound();
    const question = car(generation);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const rightAnswer = cdr(generation);

    const isRight = userAnswer === rightAnswer;
    if (isRight) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
