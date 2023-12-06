// const array = [7, 2, 9, 4, 1, 9];

// function spliteArray(arr) {
//   //Quiero que esta funcion divida en grupos e imprima cada division en console:
//   let ans = [...arr];
//   let len = arr.length;
//   if (len === 1) return;
//   let arr1 = [];
//   let arr2 = [];
//   //   console.log("ans", ans);
//   if (len % 2 === 0) {
//     const arr1 = ans.splice(len / 2);
//     console.log("arr1", arr1);
//     spliteArray(arr1);
//     console.log("arr", ans);
//     spliteArray(ans);
//   } else {
//     arr1 = ans.splice(0, 1);
//     console.log("arr1", arr1);
//     console.log("arr", ans);
//     spliteArray(ans);

//     //Se repite con el nuevo ans
//   }
// }

//Dados dos arrays ORDENADOS, de debe tomar cada item del primero y compararlo con cada item del segundo.
//Si el item comparador es menor, se lo ubica inmediatamente en el array respuesta, sino se lo ubica al elemento comparado en su lugar/
function merge(arr1, arr2) {
  const ans1 = [...arr1];
  const ans2 = [...arr2];

  for (let i = 0; i < ans1.length; i++) {
    const item = ans1[i];
    const res = locate(item, ans2);
    console.log("res", res);
  }

  //   console.log("arr2", arr2);
}
merge([1, 2, 5, 9], [4, 6, 7]);

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

  //   console.log("ans", ans);
  return ans;
}
// locate(11, [3, 6, 9]);
