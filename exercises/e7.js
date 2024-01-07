import { bankAccounts, bankAccountsNoPositiveBalance } from "../data/data";
// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastPositiveBalance(array) {
  // Your code goes here...
  let leastBalance = null;
  let minPositiveBalance = Infinity;
  for (let i = 0; i < array.length; i++) {
    const account = array[i];
    if (account.hasOwnProperty('balance') && account.balance > 0) {
      if (account.balance < minPositiveBalance) {
        minPositiveBalance = account.balance;
        leastBalance = account;
      }
    }
  }

  if (leastBalance !== null) {
    return [leastBalance];
  } else {
    return [];
  }
}

getClientWithLeastPositiveBalance(bankAccounts);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function