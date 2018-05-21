const Transaction = require('./Transaction'),
      transactions = [];

exports.statement = _ => {
  if(!(transactions.length)) return 'No transactions available';
  return calculate();
}

exports.deposit = money => {
  transactions.push(Transaction.perform({ amount: money, transactionType: 'deposit' }));
}

const calculate = _ => {
  const header = 'date || credit || debit || balance\n'; 
  return  transactions.reduce((soFar, current) => `${soFar.statement}${current.date} || ${isCredit(current)} || ${isDebit(current)} || ${balance(soFar.balance, current)}\n`, { balance: 0.00, statement: header});
}

const isCredit = transaction => transaction.transactionType == 'deposit' ? format(transaction.amount) : '';

const isDebit = transaction => transaction.transactionType == 'withdraw' ? format(transaction.amount) : '';

const balance = (previous, transaction) => transaction.transactionType == 'deposit' ? format(previous + transaction.amount) : format(previous - transaction.amount);

const format = number => number.toFixed(2);
