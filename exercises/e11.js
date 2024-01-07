// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

import { bankAccounts } from "../data/data";

export function getAllWithdrawals(array) {
  let withdrawals = [];
  for (let i = 0; i < array.length; i++) {
    const account = array[i];
    if (account.hasOwnProperty('withdrawals') && Array.isArray(account.withdrawals)) {
      const withdrawalArray = account.withdrawals;
      let withdrawalSum = 0;
      for (let i = 0; i < withdrawalArray.length; i++) {
        withdrawalSum += withdrawalArray[i];
      }
      withdrawals.push(withdrawalSum);
    } else {
      withdrawals.push(0);
    }
  }

  return withdrawals;

}

getAllWithdrawals(bankAccounts);
console.log(getAllWithdrawals(bankAccounts));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
