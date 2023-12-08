// O(1) - Constant Complexity
function sumPlusTwo(n) {
  return n + 2;
}
function operate(n) {
  n = n * 2;
  return n + 1;
}
// O(log N) - Logarithmic Complexity

// O(N) - Linear Complexity
function divideAndSum(arr) {
  //Divido al array en dos partes iguales y sumo a todos sus miebros
  let steps = 0;
  const len = arr.length;
  steps += 1;
  let subOne = 0;
  steps += 1;

  let subTwo = 0;
  steps += 1;

  for (let i = 0; i < len / 2; i++) {
    subOne += arr[i];
    steps += 1;
  }
  for (let i = len / 2; i < len; i++) {
    subTwo += arr[i];
    steps += 1;
  }
  steps += 1;

  console.log("steps", steps);
}
divideAndSum([3, 4, 5, 5, 6, 7, 7, 8]);
// O(N log N) - N x log N Complexity
// O(n²) - Quadratic Complexity
// O(n³) - Cubic Complexity
// O(2ⁿ) - Exponential Complexity
// O(N!) - Factorial Complexity
