function rotate(nums) {
  let i = 0;
  let len = nums.length - 1;
  while (i < len) {
    if (i <= len - i) {
      let saver = nums[i];
      nums[i] = nums[len - i];
      nums[len - i] = saver;
    }
    i++;
  }

  console.log("Nums", nums);
}

rotate([1, 2, 3, 4, 5, 6, 7]); // [4,3,2,1]

//PSEUDO CODE :

// const len = nums.length - 1;
// let i = 0;
// console.log("Initial", nums);

// let saver = nums[i];
// nums[i] = nums[len - i];
// nums[len - i] = saver;

// console.log("Se volteo", [nums[i], nums[len - i]]);
// // console.log("Result", nums);

// i = 1;
// saver = nums[i];
// nums[i] = nums[len - i];
// nums[len - i] = saver;

// console.log("Se volteo", [nums[i], nums[len - i]]);
// // console.log("Result", nums);

// i = 2;
// saver = nums[i];
// nums[i] = nums[len - i];
// nums[len - i] = saver;

// console.log("Se volteo", [nums[i], nums[len - i]]);
// // console.log("Result", nums);

// i = 3;
// saver = nums[i];
// nums[i] = nums[len - i];
// nums[len - i] = saver;

// console.log("Se volteo", [nums[i], nums[len - i]]);
// // console.log("Result", nums);
