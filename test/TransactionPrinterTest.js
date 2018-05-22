const chai = require('chai'),
      sinon = require('sinon'),
      expect = chai.expect,
      tPrinter = require('../src/TransactionPrinter');

var now,
    clock;

before(done => {
  now = Date.now();
  clock = sinon.useFakeTimers(now);
  done();
});

describe('transaction printer', _ => {
  const date = Date.now();
  it('pretty prints a transaction', done => {
    const transaction = { balance: 200.00, amount: 200.00, date: date, transactionType: 'withdraw' };
    const expected = `${date} ||  || 200.00 || 200.00\n`;
    expect(tPrinter.prettyPrint(transaction)).to.equal(expected);
    done();
  });
});
