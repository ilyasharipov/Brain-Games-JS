import readlineSync from 'readline-sync';

export const letsStartGame = () => {
  console.log('Welcome to the Brain Games!');
  const getUserName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${getUserName}!`);
};
