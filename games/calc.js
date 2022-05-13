/* eslint-disable no-eval */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import randomExpression from '../src/randomExpression.js';

const calc = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\nWhat is the result of the expression?`);
  let count = 0;
  while (count < 3) {
    const createdExpression = randomExpression();
    const programAnswer = String(eval(createdExpression));
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
export default calc;
