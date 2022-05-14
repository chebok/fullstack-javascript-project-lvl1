// Выдаёт последовательность в виде строки с пропущенным значением
const showProgression = (massiv, skipNumber) => {
  const copy = [...massiv];
  copy[skipNumber - 1] = '..';
  const result = copy.join(' ');
  return result;
};
export default showProgression;
