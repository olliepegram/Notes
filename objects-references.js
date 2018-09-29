let myAccount = {
  name: 'Ollie Pegram',
  expenses: 0,
  income: 0
};

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
}

let addIncome = function (account, amount) {
  account.income = account.income + amount;
}

let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
}

let getAccountSummary = function (account) {
  let balence = account.income - account.expenses;
  return `Account for ${account.name} has $${balence}. $${account.income} in income. $${account.expenses} in expenses.`;
}

addExpense(myAccount, 2.50);
addIncome(myAccount, 900);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
