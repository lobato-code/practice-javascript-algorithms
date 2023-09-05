//Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
function removeTwiceDuplicates(nums) {
  const listed = {};
  let dottedLength = 0;

  function recursion(index) {
    if (nums[index] != "*") {
      if (!listed[nums[index]]) {
        listed[nums[index]] = 1;
      } else {
        listed[nums[index]] += 1;
      }
    }
    if (listed[nums[index]] >= 3) {
      nums.splice(index, 1);
      recursion(index);
      nums.push("*");
      dottedLength += 1;
    }
  }

  for (let index = 0; index < nums.length; index++) {
    recursion(index);
  }
  return nums.length - dottedLength;
}

removeTwiceDuplicates([1, 2, 2, 2]);
