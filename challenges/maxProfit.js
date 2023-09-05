function maxProfit(prices) {
  const profits = [];
  const len = prices.length;
  for (let index = 0; index < len; index++) {
    const shifted = prices.shift();
    const filtered = prices.filter((item) => item > shifted);
    filtered.map((item) => {
      if (item > shifted) profits.push(item - shifted);
    });
  }
  if (profits.length == 0) {
    return 0;
  }
  let maxNum = profits[0];
  for (const item of profits) {
    if (item > maxNum) {
      maxNum = item;
    }
  }
  return maxNum;
}

//Better solution:
// function maxProfit(prices) {
// let left = 0; // Buy
// let right = 1; // sell
// let max_profit = 0;
// while (right < prices.length) {
//   if (prices[left] < prices[right]) {
//     let profit = prices[right] - prices[left]; // our current profit

//     max_profit = Math.max(max_profit, profit);
//   } else {
//     left = right;
//   }
//   right++;
// }
// return max_profit;
// }

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 5]));
