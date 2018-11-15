const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1));

const randomOpr = () => {
  const operators = ['+', '-', '*'];
  const str = operators[Math.floor(Math.random() * 3)];
  return str;
};

export { getRandomNum, randomOpr };
