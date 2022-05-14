/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import showProgression from '../src/showProgression.js';
import randomProgression from '../src/randomProgression.js';

const progression = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\nWhat number is missing in the progression?`);
  let count = 0;
  while (count < 3) {
    const createdExpression = randomProgression();
    const skipNumber = Math.ceil(Math.random() * createdExpression.length);
    const programAnswer = String(createdExpression[skipNumber - 1]);
    console.log(`Question: ${showProgression(createdExpression, skipNumber)}`);
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
export default progression;
