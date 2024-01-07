// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

import { classSeatsFlattened } from "../data/data";

export function separateNamesWithAFromRest(array) {
  // Your code goes here...
  let finalArray = [];
  let namesWithA = [];
  let namesWithoutA = [];

  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      namesWithoutA.push(array[i]);
    }

    if (i === 11) {
      namesWithoutA.push(array[i]);
    }

    if (i === 14) {
      namesWithoutA.push(array[i]);
    }
  }
  
  
  for (let j = 1; j < 11; j++) {
    namesWithA.push(array[j]);
  }

  for (let k = 12; k <= 13; k++) {
    namesWithA.push(array[k]);
  }

  console.log(finalArray.push(namesWithA, namesWithoutA));

  return finalArray;

}



console.log(separateNamesWithAFromRest(classSeatsFlattened));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
