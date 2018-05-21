const Transaction = require('./Transaction');

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
      transactions.push(Transaction.perform({ amount: money, transactionType: 'deposit', balance: format(balance) }));
    }

    this.withdraw = money => {
      balance -= money;
      transactions.push(Transaction.perform({ amount: money, transactionType: 'withdraw', balance: format(balance)}));
    }

    const calculate = _ => transactions.reduceRight((str, current) =>
      str+prettyPrinter({...current, debit: isDebit(current), credit: isCredit(current)}),
       prettyPrinter({date: 'date', credit: 'credit', debit: 'debit', balance: 'balance'}));

    const isCredit = transaction => transaction.transactionType == 'deposit' ? format(transaction.amount) : '';

    const isDebit = transaction => transaction.transactionType == 'withdraw' ? format(transaction.amount) : '';

    const format = number => number.toFixed(2);

    const prettyPrinter = data => `${data.date} || ${data.credit} || ${data.debit} || ${data.balance}\n`;

  }

 exports.account = account;

})(this);

