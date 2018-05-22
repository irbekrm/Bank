'use strict';
const chai = require('chai'),
      expect = chai.expect,
      moment = require('moment'),
      tPrinter = require('../models/TransactionPrinter'),
      aPrinter = require('../models/AccountPrinter'),
      STATEMENTHEADER = 'date || credit || debit || balance\n';

var date,
    formattedDate,
    transactions;

before(done => {
  date = Date.now();
  formattedDate = moment(date).format('DD/MM/YYYY'),
  transactions = [{amount: 200.00, date: date, transactionType: 'deposit', balance: 200.00 },
  { amount: 150.00, date: date, transactionType: 'withdraw', balance: 50.00 }];
  done();
});

describe('account printer', _ => {
  it('pretty prints account statement', done => {
    const statement = aPrinter.prettyPrint(transactions);
    expect(statement).to.equal(`${STATEMENTHEADER}${formattedDate} || 200.00 ||  || 200.00\n${formattedDate} ||  || 150.00 ||50.00\n`);
  done();
});
});
