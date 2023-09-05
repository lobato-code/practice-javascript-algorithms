function removeDuplicates(nums) {
  const listed = [];
  const dottedLength = [];
  function recursive(nums, index) {
    if (listed.includes(nums[index])) {
      nums.splice(index, 1);
      recursive(nums, index);
      nums.push("*");
      dottedLength.push("*");
    } else {
      if (nums[index] !== "*") listed.push(nums[index]);
      return;
    }
  }
  for (let index = 0; index < nums.length; index++) {
    recursive(nums, index);
  }
  console.log("Nums without duplicates :", nums);
  return nums.length - dottedLength.length;
}

console.log(removeDuplicates([5, 5, 5, 5]));
