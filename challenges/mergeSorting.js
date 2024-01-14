function mergeSort(arr) {
  let len = arr.length;
  if (len <= 2) {
    arr = dualSort(arr);

    return arr;
  }
  let arr1 = arr.filter((item, index) => {
    return index < len / 2;
  });
  let arr2 = arr.filter((i, index) => {
    return index >= len / 2;
  });
  return merge(mergeSort(arr1), mergeSort(arr2));
}
const array = [2, 1];
console.log("mergeSort(array)", mergeSort(array));

//Given two ORDERED arrays, take each item from the first and compare it with each item from the second.
//If the comparator item is smaller, it is immediately placed in the response array, otherwise the compared item is placed in its place/.
function merge(arr1, arr2) {
  const ans1 = [...arr1];
  const ans2 = [...arr2];
  let answer;

  recursive();
  function recursive(len = ans1.length, i = 0, arr = ans2) {
    if (i >= len) {
      answer = arr;
      return;
    } else {
      const item = ans1[i];
      const res = locate(item, arr);
      i++;
      recursive(len, i, res);
    }
  }
  return answer;
}

function dualSort(arr) {
  if (arr[0] > arr[1]) {
    return [arr[1], arr[0]];
  }
  return arr;
}

function locate(num, arr) {
  const ans = [];

  let numSorted = false;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (num < element && !numSorted) {
      ans.push(num);
      numSorted = true;
    }
    ans.push(element);
  }
  if (!numSorted) {
    ans.push(num);
  }

  return ans;
}
// function mergeSort() {
//   let len = array.length;
//   const arr1 = array.filter((item, index) => {
//     return index < len / 2;
//   });
//   const arr2 = array.filter((i, index) => {
//     return index >= len / 2;
//   });
//   len = len / 2;
//   let arr3 = arr1.filter((item, index) => {
//     return index < len / 2;
//   });
//   let arr4 = arr1.filter((i, index) => {
//     return index >= len / 2;
//   });
//   let arr5 = arr2.filter((item, index) => {
//     return index < len / 2;
//   });
//   let arr6 = arr2.filter((i, index) => {
//     return index >= len / 2;
//   });

//   arr3 = dualSort(arr3);
//   arr4 = dualSort(arr4);

//   arr5 = dualSort(arr5);
//   arr6 = dualSort(arr6);

//   console.log(`After dual sorting`);
//   console.log("arr3", arr3);
//   console.log("arr4", arr4);
//   console.log("arr5", arr5);
//   console.log("arr6", arr6);

//   let mergedArray = [...arr3];
//   mergedArray = merge(mergedArray, arr4);
//   mergedArray = merge(mergedArray, arr5);
//   mergedArray = merge(mergedArray, arr6);

//   console.log("mergedArray", mergedArray);
// }

// // mergeSort();
