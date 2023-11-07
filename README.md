# Practice: Javascript Challenges

Here is the place where I upload my attemps to solve algorithm problems from leetcode or free code camp.

The folder **challenges** contains very interesting exercises to check.

```js
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
```
