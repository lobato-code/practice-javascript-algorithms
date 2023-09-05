//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

//Merge nums1 and nums2 into a single array sorted in non-decreasing order.

//The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// const merge = function (nums1, m, nums2, n) {
//   nums1.splice(m, n);
//   nums2.map((number) => nums1.push(number));
//   nums1.sort();

//   console.log(`Merge: ${nums1}`);
// };
// merge([2, 3, 4, 0, 0], 3, [1, 7], 2);

// merge([1], 1, [], 0);

// merge([0], 0, [1], 1);

// //Here a better solution:

// const solution = function (nums1, m, nums2, n) {
//   for (let n = nums2.length - 1; n >= 0; n--) {
//     nums1[m + n] = nums2[n];
//   }
//   nums1.sort((a, b) => a - b);
//   console.log(`Solution: ${nums1}`);
// };

// solution([2, 3, 4, 0, 0], 3, [1, 7], 2);

// solution([1], 1, [], 0);

// solution([0], 0, [1], 1);
