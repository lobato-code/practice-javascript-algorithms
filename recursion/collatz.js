// How many steps it will take for a given number to  reach 1 following the Collatz conjuture

function collatz(n) {
  if (n === 1) {
    return 0;
  } else {
    if (n % 2 === 0) {
      return 1 + collatz(n / 2);
    } else {
      return 1 + collatz(3 * n + 1);
    }
  }
  return steps;
}
const ans = collatz(27);
console.log("ans", ans);

function fibonacci(len) {
  const ans = [];
  if (!len) return ans;
  ans.push(0);
  if (len === 1) return ans;
  ans.push(1);
  if (len === 2) return ans;
  let iterator = 3;
  console.log("recursive()", recursive());
  return recursive();
  function recursive(arr = [0, 1], index = 0, iterator = 3) {
    if (iterator <= len) {
      arr.push(arr[index] + arr[index + 1]);
      return recursive(arr, index + 1, iterator + 1);
    } else {
      return arr;
    }
  }
}

let answer = fibonacci(9);
console.log("answer", answer);
