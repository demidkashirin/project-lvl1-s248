const gameCondition = 'Answer "yes" if number even otherwise answer "no".';

const generateQuestion = () => Math.floor(Math.random() * 100) + 1;
const getAnswer = (number) => {
  const remainder = number % 2;
  if (remainder === 0) {
    return 'yes';
  }
  return 'no';
};
export { gameCondition, generateQuestion, getAnswer };