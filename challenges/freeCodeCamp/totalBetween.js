function sumAll(arr) {
  if (arr[0] === arr[1]) return {};
  const mayorValueIndex = arr[0] > arr[1] ? 0 : 1;
  const minorValueIndex = mayorValueIndex === 0 ? 1 : 0;
  const valuesBetween = [];
  for (
    let index = arr[minorValueIndex];
    index < arr[mayorValueIndex] + 1;
    index++
  ) {
    valuesBetween.push(index);
  }
  return valuesBetween.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

sumAll([10, 5]);
