const chai = require('chai'),
      sinon = require('sinon'),
      expect = chai.expect,
      Transaction = require('../Transaction');

var now,
    clock;

before(done => {
  now = Date.now()
  clock = sinon.useFakeTimers(now);
  done();
});

after(done => {
  clock.restore();
  done();
});

describe('new transaction', _ => {
  it('creates a new transaction with the current time recorded', done => {
    const data = { amount: 200.00, transactionType: 'deposit', accountType: 'debit' };
    const transaction = Transaction.perform(data);
    expect(transaction).to.deep.equal({ amount: 200.00, transactionType: 'deposit', accountType: 'debit', date: now });
    done();
  });
});


