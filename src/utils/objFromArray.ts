export default function objFromArray(array?: any[], key = 'id') {
  if (!array) return;
  return array.reduce((accumulator, current) => {
    accumulator[current[key]] = current;
    return accumulator;
  }, {});
}
