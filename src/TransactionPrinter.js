exports.prettyPrint = data => {
  const credit = isCredit(data);
  const debit = isDebit(data);
  const balance = format(data.balance);
  return `${data.date} || ${credit} || ${debit} || ${balance}\n`;
}

const format = number => number.toFixed(2);

const isCredit = data => data.transactionType == 'deposit' ? format(data.amount) : '';

const isDebit = data => data.transactionType == 'withdraw' ? format(data.amount) : '';
