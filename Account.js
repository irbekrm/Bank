const Transaction = require('./Transaction'),
      TransactionPrinter = require('./TransactionPrinter'),
      STATEMENTHEADER = 'date || credit || debit || balance\n',
      MESSAGES = { noTransactions: 'No transactions available', negAmount: 'Invalid amount' };

(function(exports) {
  
  function account() {

    const transactions = [];

    var balance = balance || 0;

    this.printStatement = _ => {
      if(!(transactions.length)) return MESSAGES.noTransactions;
      console.log(listTransactions());
    }

    this.deposit = money => {
      balance += money;
      transactions.push(Transaction.create({ amount: money, transactionType: 'deposit', balance: balance }));
      return this;
    }

    this.withdraw = money => {
      balance -= money;
      transactions.push(Transaction.create({ amount: money, transactionType: 'withdraw', balance: balance}));
      return this;
    }

    const listTransactions = _ => transactions.reduceRight((str, current) =>
      `${str}${TransactionPrinter.prettyPrint(current)}`,
      STATEMENTHEADER);
  }

 exports.account = account;

})(this);

