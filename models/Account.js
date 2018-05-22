'use strict';

const Transaction = require('./Transaction'),
  TransactionPrinter = require('./TransactionPrinter'),
  STATEMENTHEADER = 'date || credit || debit || balance\n',
  MESSAGES = { noTransactions: 'No transactions available',
    negAmount: 'Invalid amount' };

(function(exports) {

  function account() {

    var balance = balance || 0;

    const transactions = [],

      listTransactions = _ => transactions.reduceRight((str, current) =>
        `${str}${TransactionPrinter.prettyPrint(current)}`,
      STATEMENTHEADER),

      updateBalance = (amount, type) => {
        if (amount < 0) return false;
        if (type === 'withdraw') balance -= amount;
        if (type === 'deposit') balance += amount;
      };

    this.printStatement = _ => {
      if (!(transactions.length)) return MESSAGES.noTransactions;
      console.log(listTransactions());
    };

    this.deposit = money => {
      if (updateBalance(money, 'deposit') === false) return MESSAGES.negAmount;
      transactions.push(Transaction.create(
        { amount: money, transactionType: 'deposit', balance: balance }));
      return this;
    };

    this.withdraw = money => {
      if (updateBalance(money, 'withdraw') === false) return MESSAGES.negAmount;
      transactions.push(Transaction.create(
        { amount: money, transactionType: 'withdraw', balance: balance}));
      return this;
    };

  }

  exports.Account = account;

})(this);

