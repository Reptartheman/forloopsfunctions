// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

import { bankAccounts } from "../data/data";

export function getClientsWithWrongBalance(array) {
  let wrongBalances = [];

  for (let i = 0; i < array.length; i++) {
    const account = array[i];

    if (
      account.hasOwnProperty('balance') &&
      typeof account.balance === 'number' &&
      account.hasOwnProperty('deposits') &&
      Array.isArray(account.deposits) &&
      account.hasOwnProperty('withdrawals') &&
      Array.isArray(account.withdrawals)
    ) {
      let balance = account.balance;
      let totalDeposits = 0;

      // Calculate total deposits
      for (let j = 0; j < account.deposits.length; j++) {
        totalDeposits += account.deposits[j];
      }

      // Calculate total withdrawals
      let totalWithdrawals = 0;
      for (let k = 0; k < account.withdrawals.length; k++) {
        totalWithdrawals += account.withdrawals[k];
      }

      if (balance !== totalDeposits - totalWithdrawals) {
        wrongBalances.push(account);
      }
    }
  }

  return wrongBalances;
}

console.log(getClientsWithWrongBalance(bankAccounts));

getClientsWithWrongBalance(bankAccounts);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
