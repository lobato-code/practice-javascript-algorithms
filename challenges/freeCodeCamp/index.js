//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  const difference1 = arr1.filter((item) => !arr2.includes(item));
  const difference2 = arr2.filter((item) => !arr1.includes(item));
  // console.log("difference", difference1.concat(difference2));
  return difference1.concat(difference2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// You will be provided with an initial array as the first argument to the destroyer function, followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr, ...args) {
  let iterator = 0;
  let ans;
  (function recursive(arr) {
    if (iterator < args.length) {
      const filteredItems = arr.filter((item) => item != args[iterator]);
      console.log("filteredItems", filteredItems);
      iterator++;
      recursive(filteredItems);
    } else {
      ans = arr;
      return;
    }
  })(arr);
  console.log("ans", ans);
  return ans;
}

destroyer([1, 2, 3, 1, 2, 3], 2);
