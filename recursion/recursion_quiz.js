// Question 1: Sum all numbers
// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

function sumRange(number) {
  if (number == 1) return 1;

  return number + sumRange(number - 1);
}

// Question 2: Power function
// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

function power(base, exponent) {
  if (exponent == 0) return 1;

  return base * power(base, exponent - 1);
}

// Question 3: Calculate factorial
// Write a function that returns the factorial of a number. The factorial of 1 is just 1.

function factorial(base) {
  if (base == 1) return 1;

  return base * factorial(base - 1);
}

// Question 4: Check all values in an array
// Write a function called "all" which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

function all(array, callback) {
  //   var copy = copy || array.slice(); Unnecessary copy (?)
  if (array.length == 0) return true;
  if (callback(array[0])) {
    array.shift();
    return all(array, callback);
  } else {
    return false;
  }
}

// Question 5: Product of an array
// Write a function called" productOfArray" which takes in an array of numbers and returns the product of them all

function productOfArray(array) {
  if (array.length == 0) return 1;
  let product = array.shift();
  return product * productOfArray(array);
}

// Question 6: Search JS object
// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

function contains(object, value) {
  for (const key in object) {
    if (typeof object[key] === "object") {
      return contains(object[key], value);
    }
    if (object[key] === value) return true;
  }

  return false;
}

// Question 7: Parse a multi-dimensional array
// Given a multi-dimensional integer array, return the total number of integers stored inside this array

function howManyIntegers(array) {
  if (array.length === 0) return 0;
  let count = 0;
  let first = array.shift();
  if (Array.isArray(first)) {
    count += howManyIntegers(first);
  } else if (Number.isInteger(first)) {
    count += 1;
  }
  return (count += howManyIntegers(array));
}

// Question 8:
// Write a function that sums squares of numbers in list that may contain more lists

function sumSquares(array) {
  if (array.length === 0) return 0;
  let count = 0;
  let first = array.shift();
  if (Array.isArray(first)) {
    count += sumSquares(first);
  } else if (Number.isInteger(first)) {
    count += first * first;
  }
  return (count += sumSquares(array));
}

console.log(`Q.1: ${sumRange(25)}`);
console.log(`Q.2: ${power(3, 3)}`);
console.log(`Q.3: ${factorial(5)}`);
console.log(
  `Q.4: ${all([2, 4], function (num) {
    return num % 2 === 0;
  })}`
);
console.log(`Q-5: ${productOfArray([1, 2, 3, 4])}`);
var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};
console.log(`Q-6: ${contains(nestedObject, 44)}`);
console.log(`Q-7: ${howManyIntegers([[0, 9], [[1, 2, [3]]], "sol"])}`);
console.log(`Q-8: ${sumSquares([[0, 9], [[1, 2, [3]]], "sol"])}`);
