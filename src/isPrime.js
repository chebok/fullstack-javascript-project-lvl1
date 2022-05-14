// Функция определяет, простое число или нет
const isPrime = (num1) => {
  for (let i = 2; i < num1; i += 1) {
    if (num1 % i === 0) {
      return 'no';
    }
  } return 'yes';
};
export default isPrime;
