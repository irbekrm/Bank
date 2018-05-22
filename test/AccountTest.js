const chai = require('chai'),
      expect = chai.expect,
      sinon = require('sinon'),
      stdout = require('test-console').stdout,
      moment = require('moment'),
      header= 'date || credit || debit || balance\n',
      Account = require('../models/Account');

var now,
    account,
    formattedDate;

before(done => {
  now = Date.now();
  formattedDate = moment(now).format("DD/MM/YYYY");
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
    const expected = [`${header}${formattedDate} || 300.00 ||  || 300.00\n\n`];
    expect(statement).to.deep.equal(expected);
    done();
  });
});
   
describe('withdraw money from account', _ => {
  it('adds the transaction to the list of transactions', done => {
    account.deposit(300.00).withdraw(140.00);
    const statement = stdout.inspectSync(_ => account.printStatement());
    const expected  = [`${header}${formattedDate} ||  || 140.00 || 160.00\n${formattedDate} || 300.00 ||  || 300.00\n\n`];
    expect(statement).to.deep.equal(expected);
    done();
  });
});
