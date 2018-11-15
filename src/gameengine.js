import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const round = 3;

const startGame = (info, playRound) => {
  console.log('Welcome to the Brain Games!');
  console.log(info);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let action = 0; action < round; action += 1) {
    const generation = playRound();
    const questionData = car(generation);
    console.log(`Question: ${questionData}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const rightAnswer = String(cdr(generation));

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
