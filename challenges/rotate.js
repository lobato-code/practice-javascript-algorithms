// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
// Example :
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

function rotate(nums, k) {
  k = k % nums.length;
  for (let index = 0; index < k; index++) {
    let popped = nums.pop();
    nums.unshift(popped);
  }
  console.log("nums", nums);
}

rotate([1, 2, 3, 4], 13);

//Better solution:

// function rotate(nums, k) {
//   k %= nums.length;
//   let reverse = function (i, j) {
//     while (i < j) {
//       let temp = nums[i];
//       nums[i] = nums[j];
//       nums[j] = temp;
//       i++;
//       j--;
//     }
//   };
//   reverse(0, nums.length - 1);
//   reverse(0, k - 1);
//   reverse(k, nums.length - 1);
//   console.log(nums);
// }

//Recursive solution:

// function rotate(nums, k) {
// let iterator = 0;
// const list = [];
// function recursive() {
//   if (iterator < k) {
//     iterator += 1;
//     const popped = nums.pop();
//     console.log("Length", nums.length);
//     recursive();
//     list.unshift(popped);
//   } else {
//     return;
//   }
// }

// if (k > nums.length) {
//   console.log(k % nums.length);
//   k = k % nums.length;
// }
// recursive();

// for (let index = 0; index < list.length; index++) {
//   nums.unshift(list[index]);
// }}

// // console.log(`Final-list`, list);
// // console.log("Final-iterator", iterator);
// console.log("Nums", nums);
