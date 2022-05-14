// Создание арифметической прогрессии
function randomProgression() {
  const result = [];
  const progressionLength = Math.floor(Math.random() * 6) + 5;
  let value = Math.ceil(Math.random() * 30);
  const stepProgression = Math.ceil(Math.random() * 5);
  for (let i = 1; i <= progressionLength; i += 1) {
    result.push(value);
    value += stepProgression;
  } return result;
} export default randomProgression;
