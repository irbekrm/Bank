const chai = require('chai'),
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
    expect(account.printStatement()).to.equal('No transactions available');
    done();
  });
});

describe('checking for negative amounts', _ => {
  it('does not allow to withdraw negative amount', done => {
    expect(account.withdraw(-400.00)).to.equal('Invalid amount');
    done();
  });

  it('does not allow to deposit negative amount', done => {
    expect(account.deposit(-500.00)).to.equal('Invalid amount');
    done();
  });
});

describe('deposit money into account', _ => {
  it('adds the transaction to the list of transactions', done => {
   account.deposit(300.00);
    const statement = stdout.inspectSync(_ => account.printStatement());
    const expected = [`${header}${now} || 300.00 ||  || 300.00\n\n`];
    expect(statement).to.deep.equal(expected);
    //assert.deepEqual(statement, [`${header}${now} || 300.00 ||  || 300.00\n\n`]);
    done();
  });
});
   
describe('withdraw money from account', _ => {
  it('adds the transaction to the list of transactions', done => {
    account.deposit(300.00).withdraw(140.00);
    const statement = stdout.inspectSync(_ => account.printStatement());
    const expected  = [`${header}${now} ||  || 140.00 || 160.00\n${now} || 300.00 ||  || 300.00\n\n`];
    expect(statement).to.deep.equal(expected);
    done();
  });
});
