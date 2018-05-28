'use strict';

const expect = require('chai').expect,
  moment = require('moment'),
  aPrinter = require('../models/AccountPrinter'),
  MESSAGES = {noTransactions: 'No transactions available' },
  STATEMENTHEADER = 'date || credit || debit || balance\n';

var date,
  formattedDate,
  transactions;

before(done => {
  date = Date.now();
  formattedDate = moment(date).format('DD/MM/YYYY');
  transactions = [
  { amount: 200.00, balance: 200.00, date: date, transactionType: 'deposit' },
  { amount: 150.00, balance: 50.00, date: date, transactionType: 'withdraw' }];
  done();
});

describe('prints account statement', _ => {
  it('prints statement with transactions ordered with earliest first', done => {
    const statement = aPrinter.prettyPrint(transactions);
    expect(statement).to.equal(
    `${STATEMENTHEADER}${formattedDate} ||  || 150.00 || 50.00\n` +
    `${formattedDate} || 200.00 ||  || 200.00\n`);
    done();
  });

  it('returns a message if no transactions available', done => {
    expect(aPrinter.prettyPrint([])).to.equal(MESSAGES.noTransactions);
    done();
  });
});

