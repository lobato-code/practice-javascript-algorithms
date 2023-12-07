// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
function whatIsInAName(collection, source) {
  const [...sourceKey] = Object.keys(source);
  let index = 0;
  let ans;
  (function recursive(arr) {
    if (index < sourceKey.length) {
      const filteredByKeyValue = arr.filter(
        (item) => item[sourceKey[index]] === source[sourceKey[index]]
      );
      index++;
      recursive(filteredByKeyValue);
    } else {
      ans = arr;
      return;
    }
  })(collection);
  // console.log("ans", ans);
  return ans;
}

function whatIsInAName(collection, source) {
  return collection.filter((item) => {
    for (let key in source) {
      if (item[key] !== source[key]) {
        return false;
      }
    }
    return true;
  });
}

whatIsInAName(
  [
    { bat: 1, cookie: 2 },
    { apple: 1, bat: 2 },
    { apple: 1 },
    { apple: 1, cookie: 2 },
    { apple: 1, bat: 2, cookie: 2 },
  ],
  { apple: 1, cookie: 2 }
);

//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  const spinalCaseString = str
    .replace(/_/g, "-")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
  console.log("spinalCaseString", spinalCaseString);
  return spinalCaseString;
}

spinalCase("The_Andy_Griffith_Show");
