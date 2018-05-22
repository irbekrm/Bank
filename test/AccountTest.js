const chai = require('chai'),
      assert = require('assert'),
      sinon = require('sinon'),
      expect = chai.expect,
      stdout = require('test-console').stdout,
      header= 'date || credit || debit || balance\n',
      Account = require('../Account');

var now,
    clock,
    account;

before(done => {
  now = Date.now();
  clock = sinon.useFakeTimers(now);
  done();
});

beforeEach(done => {
  account = new Account.account();
  done();
});

describe('creating new account', _ => {
  it('is initialized with empty list of transactions', done => {
    expect(account.statement()).to.equal('No transactions available');
    done();
  });
});

describe('deposit money into account', _ => {
  it('adds the transaction to the list of transactions', done => {
   account.deposit(300.00);
    const statement = stdout.inspectSync(_ => account.statement());
    assert.deepEqual(statement, [`${header}${now} || 300.00 ||  || 300.00\n\n`]);
    done();
  });
});
   
describe('withdraw money from account', _ => {
  it('adds the transaction to the list of transactions', done => {
    account.deposit(300.00).withdraw(140.00);
    const statement = stdout.inspectSync(_ => account.statement());
    const expected  = [`${header}${now} ||  || 140.00 || 160.00\n${now} || 300.00 ||  || 300.00\n\n`];
    assert.deepEqual(statement, expected)
    done();
  });
});
