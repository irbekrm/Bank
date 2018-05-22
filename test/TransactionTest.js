const chai = require('chai'),
      sinon = require('sinon'),
      expect = chai.expect,
      Transaction = require('../src/Transaction');

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
    const data = { amount: 200.00, transactionType: 'deposit', balance: 200.00};
    const transaction = Transaction.create(data);
    expect(transaction).to.deep.equal({ balance: 200.00, amount: 200.00, transactionType: 'deposit', date: now });
    done();
  });
});


