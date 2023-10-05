transactions = [100, 200, -400, 0, 1000, -700, 0, -500, 2000];

// Task for Day 1 - figure out which ones are credit

const creditTransactions = [];

for (let i = 0; i < transactions.length; i++) {
  if (transactions[i] > 0) {
    creditTransactions.push(transactions[i]);
  }
}

console.log(creditTransactions);

// Task for Day 2 - figure out the debit transactions
const debitTransactions = [];

for (let i = 0; i < transactions.length; i++) {
  if (transactions[i] < 0) {
    debitTransactions.push(transactions[i]);
  }
}

console.log(debitTransactions);

// Above methods are very similar except if condition - this is called redundant code

// Day 3 : Minimizing the redundant cde using HOFs

function checkIfCredit(a) {
  return a > 0;
}

function checkIfDebit(a) {
  return a < 0;
}

function checkIfZero(a) {
  return a == 0;
}

function loopAndCheckSomething(arr, checkFunction) {
  const initialArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (checkFunction(arr[i])) {
      initialArray.push(arr[i]);
    }
  }
  return initialArray;
}

console.log(
  `Credit transactios are -`,
  loopAndCheckSomething(transactions, checkIfCredit)
);
console.log(
  `Debit transactios are -`,
  loopAndCheckSomething(transactions, checkIfDebit)
);
console.log(
  `Zero transactios are -`,
  loopAndCheckSomething(transactions, checkIfZero)
);
