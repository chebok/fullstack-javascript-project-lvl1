/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const isEven = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
  let count = 0;
  while (count < 3) {
    const createdExpression = Math.ceil(Math.random() * 100);
    const programAnswer = createdExpression % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${createdExpression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== programAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${programAnswer}.\nLet's try again, ${userName}`);
      break;
    } console.log('Correct!');
    count += 1;
    if (count === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default isEven;
