function deleteFromNums(nums, val) {
  function recursive(nums, val, index) {
    if (nums[index] === val) {
      nums.splice(index, 1);
      recursive(nums, val, index);
      nums.push("*");
      removedLength.push("*");
    } else {
      return;
    }
  }

  const removedLength = [];
  for (let index = 0; index < nums.length; index++) {
    recursive(nums, val, index);
  }
  console.log("Nums without target :", nums);

  return nums.length - removedLength.length;
}

deleteFromNums([9, 3, 5, 3, 6, 8, 2, 3], 3);

deleteFromNums([2, 2, 2, 2, 1, 2], 2);
// console.log(`${index}: ${nums[index]} ${nums[index] == val}`);
