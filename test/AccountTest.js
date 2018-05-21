const chai = require('chai'),
      expect = chai.expect;

var Account;

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
    
