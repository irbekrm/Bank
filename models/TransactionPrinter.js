'use strict';

const moment = require('moment');

exports.prettyPrint = data => {
  const credit = isCredit(data),
    debit = isDebit(data),
    date = formatDate(data.date),
    balance = formatFloat(data.balance);
  return `${date} || ${credit} || ${debit} || ${balance}\n`;
};

const formatFloat = number => number.toFixed(2),

  formatDate = date => moment(date).format('DD/MM/YYYY'),

  isCredit = data => data.transactionType === 'deposit' ?
    formatFloat(data.amount) : '',

  isDebit = data => data.transactionType === 'withdraw' ?
    formatFloat(data.amount) : '';
