function test(callback, cases) {
  for (const iterator of cases) {
    const { input, output } = iterator;
    if (callback(input) !== output) {
      console.log(
        `Test fail: No equal (input, output): ${callback(input)}, ${output}`
      );
    }
  }

  console.log("All test passed. Hooray!");
}

module.exports = test;
