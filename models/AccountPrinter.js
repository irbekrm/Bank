'use strict';

const TransactionPrinter = require('./TransactionPrinter'),
  STATEMENTHEADER = 'date || credit || debit || balance\n',
  MESSAGES = { noTransactions: 'No transactions available',
  negError: 'Invalid amount' };

module.exports = {
  prettyPrint: transactions => {
    if (!(transactions.length)) return MESSAGES.noTransactions;
    return transactions.reduceRight((str, current) =>
    `${str}${TransactionPrinter.prettyPrint(current)}`,
    `${STATEMENTHEADER}`);
  },

  negativeError: _ => MESSAGES.negError,
};
