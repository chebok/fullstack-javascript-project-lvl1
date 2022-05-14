// Выдаёт последовательность в виде строки с пропущенным значением
const showProgression = (massiv, skipNumber) => {
  massiv[skipNumber - 1] = '..';
  const result = massiv.join(' ');
  return result;
}; export default showProgression;
