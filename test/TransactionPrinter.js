const chai = require('chai'),
      sinon = require('sinon'),
      expect = chai.expect,
      tPrinter = require('../TransactionPrinter');

var now,
    clock;

before(done => {
  now = Date.now();
  clock = sinon.useFakeTimers(now);
  done();
});

describe('transaction printer', _ => {
  it('pretty prints a transaction', done => {
    const transaction = { amount: 200.00, date: Date.now(), transactionType: 'withdraw' };
    const expected = 'date || 200.00 ||  || 200.00\n';
    expect(tPrinter.prettyPrint(transaction)).to.equal(expected);
    done();
  });
});
