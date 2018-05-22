const Transaction = require('./Transaction'),
      TransactionPrinter = require('./TransactionPrinter'),
      STATEMENTHEADER = 'date || credit || debit || balance\n';

(function(exports) {
  
  function account() {

    const transactions = [];

    var balance = balance || 0;

    this.statement = _ => {
      if(!(transactions.length)) return 'No transactions available';
      console.log(calculate());
    }

    this.deposit = money => {
      balance += money;
      transactions.push(Transaction.perform({ amount: money, transactionType: 'deposit', balance: balance }));
      return this;
    }

    this.withdraw = money => {
      balance -= money;
      transactions.push(Transaction.perform({ amount: money, transactionType: 'withdraw', balance: format(balance)}));
      return this;
    }

    const calculate = _ => transactions.reduceRight((str, current) =>
      `${str}{TransactionPrinter.prettyPrint(current)}`,
      STATEMENTHEADER);
  }

 exports.account = account;

})(this);

