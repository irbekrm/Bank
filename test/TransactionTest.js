'use strict';

const chai = require('chai'),
  expect = chai.expect,
  sinon = require('sinon'),
  Transaction = require('../models/Transaction');

var now,
  clock;

before(done => {
  now = Date.now();
  clock = sinon.useFakeTimers(now);
  done();
});

after(done => {
  clock.restore();
  done();
});

describe('new transaction', _ => {
  it('creates a new transaction with the current time recorded', done => {
    const data = { amount: 200.00, transactionType: 'deposit', balance: 200.00},
      transaction = Transaction.create(data);
    expect(transaction).to.deep.equal(
      { balance: 200.00, amount: 200.00,
        transactionType: 'deposit', date: now });
    done();
  });
});


