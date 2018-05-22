const chai = require('chai'),
      expect = chai.expect,
      tPrinter = require('../src/TransactionPrinter');

var now,
    clock;

before(done => {
  now = Date.now();
  done();
});

describe('transaction printer', _ => {
  it('pretty prints a transaction', done => {
    const transaction = { balance: 200.00, amount: 200.00, date: now, transactionType: 'withdraw' };
    const expected = `${now} ||  || 200.00 || 200.00\n`;
    expect(tPrinter.prettyPrint(transaction)).to.equal(expected);
    done();
  });
});
