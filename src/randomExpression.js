// Создание рандомного выражения;

function randomExpression() {
  const numberOne = Math.ceil(Math.random() * 100);
  const numberTwo = Math.ceil(Math.random() * 100)
  const createdNumber = Math.ceil(Math.random() * 100);
  if (createdNumber < 33) {
    return (`${numberOne} + ${numberTwo}`);
  }
  if (createdNumber < 66) {
    return (`${numberOne} - ${numberTwo}`);
  } return (`${numberOne} * ${numberTwo}`);
}
export default randomExpression;
