const chai = require('chai'),
      sinon = require('sinon'),
      expect = chai.expect;

var Account,
    now,
    clock;

before(done => {
  now = Date.now();
  clock = sinon.useFakeTimers(now);
  done();
});


beforeEach(done => {
  Account = require('../Account');
  done();
});

describe('creating new account', _ => {
  it('is initialized with empty list of transactions', done => {
    expect(Account.statement()).to.equal('No transactions available');
    done();
  });
});

describe('deposit money into account', _ => {
  it('adds the transaction to the list of transactions', done => {
   Account.deposit(300.00);
    expect(Account.statement()).to.equal(`date || credit || debit || balance\n${now} || 300.00 || || 300.00\n`);
    done();
  });
});
    
