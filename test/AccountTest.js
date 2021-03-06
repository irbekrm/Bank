'use strict';

const chai = require('chai'),
  expect = chai.expect,
  stdout = require('test-console').stdout,
  moment = require('moment'),
  header = 'date || credit || debit || balance\n',
  Account = require('../models/Account');

var now,
  account,
  formattedDate;

before(function(done){
  now = Date.now();
  formattedDate = moment(now).format('DD/MM/YYYY');
  done();
});

beforeEach(function(done){
  account = new Account.Account();
  done();
});


describe('creating new account', _ => {
  it('is initialized with empty list of transactions', done => {
    const statement = stdout.inspectSync(_ => account.printStatement());
    expect(statement[0]).to.equal('No transactions available\n');
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

describe('deposit money into account', function() {
  it('adds the transaction to the list of transactions', function(done){
    account.deposit(300.00);
    const statement = stdout.inspectSync(_ => account.printStatement()),
      expected = [`${header}${formattedDate} || 300.00 ||  || 300.00\n\n`];
    expect(statement).to.deep.equal(expected);
    done();
  });
});

describe('withdraw money from account', function(){
  it('adds the transaction to the list of transactions', function(done){
    account.deposit(300.00).withdraw(140.00);
    const statement = stdout.inspectSync(_ => account.printStatement()),
      expected = [`${header}${formattedDate} ||  || 140.00 || 160.00` +
      `\n${formattedDate} || 300.00 ||  || 300.00\n\n`];
    expect(statement).to.deep.equal(expected);
    done();
  });
});
