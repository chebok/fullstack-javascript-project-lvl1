/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import isPrime from '../src/isPrime.js';

const prime = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\nAnswer "yes" if given number is prime. Otherwise answer "no".`);
  let count = 0;
  while (count < 3) {
    const createdExpression = Math.ceil(Math.random() * 100) + 1;
    const programAnswer = isPrime(createdExpression);
    console.log(`Question: ${createdExpression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== programAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${programAnswer}.\nLet's try again, ${userName}!`);
      break;
    } console.log('Correct!');
    count += 1;
    if (count === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default prime;
