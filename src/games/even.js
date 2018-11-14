import readlineSync from 'readline-sync';

const isEven = num => num % 2 === 0;
const randomNum = () => Math.floor(Math.random() * 100);

const logicGame = () => {
  const numberforquest = randomNum();
  console.log(`Question: ${numberforquest}`);
  const rightAnswer = isEven(numberforquest) ? 'yes' : 'no';
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  const isRight = userAnswer === rightAnswer;
  if (isRight) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
  }
  return isRight;
};

const startGameEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  const steps = 3;

  for (let n = 0; n < steps; n += 1) {
    if (logicGame() === false) {
      return `Let's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};

export default startGameEven;
