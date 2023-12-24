# Practice: Javascript Challenges

This is where I upload my attempts to solve leetcode or free code camp algorithm problems.

The **challenges** folder contains very interesting exercises to check.

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

  console.log('Nums', nums);
}
```

> Para mejorar en la programacion hay que entrenar todos los dias, pero sin olvidar que es mejor menos tiempo pero con calidad, que pasarsela todo el dia en lo mismo. (Less is more)
