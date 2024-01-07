
// EXERCISE 19
// Please, read the exercise-info/reverse.md to get the initial data of what is the expected result of this exercise.
// reverseArray([1, 2, 3 ,4]) => [4, 3, 2, 1]
// NOTE: You can NOT use the array.reverse() method in your code



export function reverseArray(array) {
  // Your code goes here...
  let reversed = new Array(array.length);// make the length of the array the one we are passing through when invoked
  for (let i = 0; i < array.length; i++) {
    reversed[array.length-1 - i] = array[i]; //this line is the one that is reversing the array.
  }
  return reversed;
}
console.log(reverseArray([1, 2, 3, 4]));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-19"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
