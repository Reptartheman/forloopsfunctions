// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

import { bankAccounts } from "../data/data";

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  let accountsWithSumsLessThan2000 = [];

  for (let i = 0; i < array.length; i++) {
    let account = array[i]; // Initialize the sum to 0
    let depositSum = 0;
    if (account.hasOwnProperty('deposits') && Array.isArray(account.deposits)) {
      const depositArray = account.deposits;
      for (let j = 0; j < depositArray.length; j++) {
        depositSum += depositArray[j];
      }
    }

    // If there are no deposits, the sum is already 0
    // Check if the sum is less than 2000 or there are no deposits
    if (depositSum < 2000 || depositSum === 0) {
      accountsWithSumsLessThan2000.push(account);
    }
  };

  return accountsWithSumsLessThan2000;
}


getAllAccountsWithSumsOfDepositsLess2000(bankAccounts);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
