const repl = require('repl'),
  context = repl.start('$ ').context;

  context.Account = require('./models/Account').Account;
