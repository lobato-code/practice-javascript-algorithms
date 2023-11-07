// 1.- Return the length of the longest word in the provided sentence.

function findLongestWordLength(str) {
  const splited = str.split(" ");
  const sorted = splited.sort((a, b) => {
    return b.length - a.length;
  });
  console.log(`The length of the longest word: ${sorted[0].length}`);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// 2.- Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    const sorted = element.sort((a, b) => {
      return b - a;
    });
    ans.push(sorted[0]);
  }
  console.log("The largest number from each provided sub-array: ", ans);
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

// 3.- Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
  const lastIsEqual = str.slice(-target.length) === target;
  console.log(
    "Check if a string ends with the given target string: ",
    lastIsEqual
  );
}

confirmEnding("Bastian", "ian");

// 4.- Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number

function repeatStringNumTimes(str, num) {
  let ans = "";
  if (num > 0) {
    for (let index = 0; index < num; index++) {
      ans += str;
    }
  }
  console.log("Repeat a given string str for num times: ", ans);
}

repeatStringNumTimes("abc", 2);

// 5.- Truncate a string  if it is longer than the given maximum string length . Return the truncated string with a ... ending.

function truncateString(str, num) {
  const dots = str.length <= num ? "" : "...";
  console.log(
    "Truncate a string if it is longer than the maximum: ",
    str.slice(0, num) + dots
  );
}

truncateString("A-tisket a-tasket", "A-tisket a-tasket".length + 2);

// 6.- Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
  let ans = undefined;
  const checkTruth = () => {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (func(element)) {
        ans = element;
        return;
      }
    }
  };
  checkTruth();
  console.log(
    "Returns the first element in it that passes a 'truth test': ",
    ans
  );
}

findElement([1, 3, 3, 4], (num) => num % 2 === 0);

//7.- Check if a value is classified as a boolean primitive. Return true or false.

function booWho(bool) {
  console.log(
    "Check if a value is classified as a boolean primitive: ",
    typeof bool === "boolean"
  );
}

booWho(false);

//8.- Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
  const ans = [];
  const splited = str.split(" ");
  for (let index = 0; index < splited.length; index++) {
    let element = splited[index];
    const capitalizedWord =
      element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    ans.push(capitalizedWord);
  }
  console.log(
    "Return with the first letter of each word capitalized: ",
    ans.join(" ")
  );
}

titleCase("sHoRt AnD sToUt");

// 9.- You are given two arrays and an index. Copy each element of the first array into the second array, in order.Begin inserting elements at index n of the second array.

function frankenSplice(arr1, arr2, n) {
  const ans = [...arr1];
  const sliced = arr2.slice(0, n);
  const rest = arr2.slice(n);
  for (let index = sliced.length - 1; index >= 0; index--) {
    const element = sliced[index];
    ans.unshift(element);
  }
  for (let index = 0; index < rest.length; index++) {
    const element = rest[index];

    ans.push(element);
  }
  console.log(
    "Copy each element of the first array into the second array: ",
    ans
  );
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// 10.- Remove all falsy values from an array. Return a new array; do not mutate the original array.

function bouncer(arr) {
  const ans = [];

  for (const iterator of arr) {
    if (iterator) {
      ans.push(iterator);
    }
  }
  console.log("Remove all falsy values from an array: ", ans);
}

bouncer([7, "ate", "", false, 9]);

// 11.- Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
  const sorted = arr.sort((a, b) => a - b);
  let ans = sorted.length;
  const checkIdex = () => {
    for (let index = 0; index < sorted.length; index++) {
      const element = sorted[index];
      if (!(element < num)) {
        ans = index;
        return;
      }
    }
  };
  checkIdex();
  console.log(
    "Return the lowest index at which a value should be inserted into an array: ",
    ans
  );
}

getIndexToIns([2, 5, 10], 1);

// 12.- Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {
  const splitedOriginal = arr[0].split("").map((item) => item.toLowerCase());
  const splited = arr[1].split("");
  const checkIncludes = () => {
    for (let index = 0; index < splited.length; index++) {
      const element = splited[index];
      if (!splitedOriginal.includes(element.toLowerCase())) {
        return false;
      }
    }
    return true;
  };
  console.log(
    "Return true if the string in the first element of the array contains all of the letters: ",
    checkIncludes()
  );
}

mutation(["Mary", "Army"]);

// 13 .- Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  const nGroups = arr.length / size;
  const getGroups = () => {
    const saver = [];
    for (let index = len; index < len + size; index++) {
      const element = arr[index];
      if (element || element === 0) {
        saver.push(element);
      }
    }
    return saver;
  };
  const ans = [];
  let len = 0;
  for (let index = 0; index < nGroups; index++) {
    const group = getGroups();
    len += size;
    ans.push(group);
  }
  console.log("Write a function that splits an array: ", ans);
}

chunkArrayInGroups([0, 1, 2, 3, 4], 3);
