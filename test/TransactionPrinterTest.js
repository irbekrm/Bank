const chai = require('chai'),
      expect = chai.expect,
      moment = require('moment'),
      tPrinter = require('../models/TransactionPrinter');

var formattedDate,
    now

before(done => {
  now = Date.now();
  formattedDate = moment(now).format("DD/MM/YYYY"); 
  done();
});

describe('transaction printer', _ => {
  it('pretty prints a transaction', done => {
    const transaction = { balance: 200.00, amount: 200.00, date: now, transactionType: 'withdraw' };
    const expected = `${formattedDate} ||  || 200.00 || 200.00\n`;
    expect(tPrinter.prettyPrint(transaction)).to.equal(expected);
    done();
  });
});
