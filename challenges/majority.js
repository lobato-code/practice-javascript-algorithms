//Given an array nums of size n, return the majority element.

//The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

function majorityElement(nums) {
  if (nums.length == 1) return nums[0];
  const listed = {};

  return nums.find((num) => {
    if (listed[num]) {
      listed[num] += 1;
      if (listed[num] > nums.length / 2) {
        console.log(`Listed`, listed);
        return num;
      }
    } else {
      listed[num] = 1;
      console.log(`Listed`, listed);
    }
  });
}

console.log(majorityElement([1]));
