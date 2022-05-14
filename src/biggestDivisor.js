const biggestDivisor = (num1, num2) => {
  const result = num1;
  for (let i = num1; i >= 1; i -= 1) {
    if (num2 % i === 0 && num1 % i === 0) {
      return i;
    }
  } return result;
};
export default biggestDivisor;
