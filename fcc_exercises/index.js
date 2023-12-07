const test = require("./test");

// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

function translatePigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const isFirstVowel = (item) => vowels.includes(item);
  let result;
  if (isFirstVowel(str[0])) {
    result = str.concat("way");
  } else {
    const arr = str.split("");
    const [firstChars, newArr] = recursive(arr);
    result = newArr.join("").concat(`${firstChars}ay`);
  }
  console.log("result", result);
  return result;

  function recursive(arr, firstChar = "", i = 0, len = arr.length) {
    if (!isFirstVowel(arr[0]) && i < len) {
      firstChar += arr.shift();
      i++;
      return recursive(arr, firstChar, i, len);
    } else {
      return [firstChar, arr];
    }
  }
}

const testingCases = [
  { input: "consonant", output: "onsonantcay" },
  { input: "outfit", output: "outfitway" },
  { input: "schedule", output: "eduleschay" },
  { input: "rhythm", output: "rhythmay" },
];

test(translatePigLatin, testingCases);
