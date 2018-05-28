'use strict';

const Transaction = require('./Transaction'),
  AccountPrinter = require('./AccountPrinter');

module.exports = {

  Account: function() {

    var balance = 0;

    const transactions = [],


      updateBalance = (amount, type) => {
        if (amount < 0) return false;
        if (type === 'withdraw') balance -= amount;
        if (type === 'deposit') balance += amount;
      };

    this.printStatement = _ => {
      const t = AccountPrinter.prettyPrint(transactions);
      console.log(t);
    };

    this.deposit = money => {
      if (updateBalance(money, 'deposit') === false){
        return AccountPrinter.negativeError();
      };
      transactions.push(Transaction.create(
      { amount: money, transactionType: 'deposit', balance: balance }));
      return this;
    };

    this.withdraw = money => {
      if (updateBalance(money, 'withdraw') === false){
        return AccountPrinter.negativeError();
      }
      transactions.push(Transaction.create(
      { amount: money, transactionType: 'withdraw', balance: balance}));
      return this;
    };
  },
};
