const account = {
  name: "Ollie Pegram",
  expenses: [],
  addExpense: function(description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    });
  },
  getAccountSummary: function() {
    let totalExpeneses = 0;

    this.expenses.forEach(function(expense) {
      totalExpenses = totalExpenses + expense.amount;
    });

    return `${this.name} has $${totalExpeneses} in expenses.`;
  }
};

account.addExpense("Rent", 950);
account.addExpense("Coffee", 2);
console.log(account.getAccountSummary());
