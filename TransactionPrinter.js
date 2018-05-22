exports.prettyPrint = data => {
  const credit = isCredit(data.transactionType);
  const debit = isDebit(data.transactionType);
  const balance = format(balance);
  return `${data.date} || ${credit} || ${debit} || ${balance}`;
}

const format = number => number.toFixed(2);

const isCredit = data => data.transactionType == 'deposit' ? format(data.amount) : '';

const isDebit = data => data.transactionType == 'withdraw' ? format(data.amount) : '';
