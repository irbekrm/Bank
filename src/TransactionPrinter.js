const moment = require('moment');

exports.prettyPrint = data => {
  const credit = isCredit(data);
  const debit = isDebit(data);
  const date = formatDate(data.date);
  const balance = formatFloat(data.balance);
  return `${date} || ${credit} || ${debit} || ${balance}\n`;
}

const formatFloat = number => number.toFixed(2);

const formatDate = date => moment(date).format("DD/MM/YY");

const isCredit = data => data.transactionType == 'deposit' ? formatFloat(data.amount) : '';

const isDebit = data => data.transactionType == 'withdraw' ? formatFloat(data.amount) : '';
