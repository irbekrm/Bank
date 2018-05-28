Bank
===
[![Build Status](https://travis-ci.org/irbekrm/GildedRose.svg?branch=master)](https://travis-ci.org/irbekrm/GildedRose)

### Description

Tech test for Makers Academy.

From the given description:

>* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement
> a command line interface that takes input from STDIN.)
>* Deposits, withdrawal.
>* Account statement (date, amount, balance) printing.
>* Data can be kept in memory (it doesn't need to be stored to a database or anything).

> Acceptance criteria:

>**Given** a client makes a deposit of 1000 on 10-01-2012  
>**And** a deposit of 2000 on 13-01-2012  
>**And** a withdrawal of 500 on 14-01-2012  
>**When** she prints her bank statement  
>**Then** she would see

>```
>date || credit || debit || balance
>14/01/2012 || || 500.00 || 2500.00
>13/01/2012 || 2000.00 || || 3000.00
>10/01/2012 || 1000.00 || || 1000.00
>```

### Solution

I structured the app using npm modules. The underlying logics is implemented using two models-
Account and Transaction. Each has a corresponding view module that is responsible for pretty printing the description
of and instance of the model.
My main goal was to achieve clear separation of concerns within the app and write clear, elegant, maintainable and well-tested code.


### Use

Clone the repository

*npm install* - install dependencies

 *npm test* - run tests and view test coverage

*npm run lint* - run ESLint linter

**Interact with the code:**

*npm start* - will start a node console with Account class pre-loaded

`const account = new Account(); // create a new Account instance`

`account.deposit(300.00); // deposit £300.00`

`account.withdraw(130.00); //withdraw £130.00`

`account.printStatement(); // view the list of transactions`

### Technologies

* Core JavaScript
* Node.js
* Mocha
* Chai
* Sinon
* ESLint
