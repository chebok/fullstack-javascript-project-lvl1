/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import biggestDivisor from '../src/biggestDivisor.js';

const gcd = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\nFind the greatest common divisor of given numbers.`);
  let count = 0;
  while (count < 3) {
    const num1 = Math.ceil(Math.random() * 100) + 2;
    const num2 = Math.ceil(Math.random() * 100) + 2;
    const createdExpression = `${num1} ${num2}`;
    const programAnswer = String(biggestDivisor(num1, num2));
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
export default gcd;
