// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  // Your code goes here...
   let minVal = array[0];

   for (let i = 0; i < array.length; i++) {
    const val = array[i];
    if (val < minVal) {
      return minVal = val;
    }
   }

   return minVal;
}

findMinValueInArray([20, 24, 19, 26])

export function findMaxValueInArray(array) {
  // Your code goes here...
  let maxVal = array[0];

  for (let i = 0; i < array.length; i++) {
    const val = array[i];
    if (val > maxVal) {
        maxVal = val;
    }
  }

  return maxVal;
}
findMaxValueInArray([20, 24, 19, 26]);
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
