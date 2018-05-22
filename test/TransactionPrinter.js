const chai = require('chai'),
      sinon = require('sinon'),
      expect = chai.expect,
      TransactionPrinter = require('../TransactionPrinter');

var now,
    clock,
    tPrinter;

before(done => {
  now = Date.now();
  clock = sinon.useFakeTimers(now);
  done();
});

beforeEach(done => {
  tPrinter = new TransactionPrinter.printer();
  done();
});

describe('transaction printer', _ => {
  it('pretty prints a transaction', done => {
    const transaction = { amount: 200.00, date: Date.now(), transactionType: 'withdraw' };
    const expected = 'date || 200.00 ||  || 200.00\n';
    expect(transaction.print()).to.equal(expected);
    done();
  });
});
