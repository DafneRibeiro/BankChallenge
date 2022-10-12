# Bank

This challenge helps you practice your OO design skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

- You should be able to interact with your code via the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, credit or debit amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```



################### Domain Modeling #####################

| Object       | Properties          | Message              | Output |
| ------------ | ------------------- | -------------------- | ------ |
| Account      | transaction[@array] | get transaction()    | @array |
|              | balance             | get balance()        | number |
|              |                     | balanceTotal()       | number |
|              |                     |                      |        |
|              |                     |                      |        |
| Transactions | transactions        | createTransactions() |        |
|              |                     | get transactions()   |        |
|              | amount              |                      | number |
|              | date                |                      | string |
|              | balance             |                      | number |
| Statement    | statement           | printTransactions()  |        |
|              |                     | get statement ()     |        |
|              |                     |                      |        |

I first do a test for a deposit transaction using the amount of 1000 to check if the transaction I created was added to the array. I look for the transaction[0] after I used the function createTransactions()


Using the same approach for test 2 and test 3 I then check if the following transactions were added to the same array.  

For test 4, I test if I can Identify the transaction type when I do a deposit in the account. 
I then use the same approach for test 5. This tests are to check if I can also get the type when I want to print my statement in a later test.

Following my previous tests, I will use the same approach to identify my transaction date for a deposit and also for a withdraw, to make sure I can access this information.

For test 8, I check if all the transactions I created were stored properly in the array, using .length() to check if is equal to 3 (transactions).

## Encountered error : Important as I couldn't make it pass encountered an error I honestly couldn't fix
For test 9, I would like to check if printTransaction was called, but I couldn't make it pass as it encounters an error when it reaches .reverse() on my statement, I am sure It would be better instead of leaving it commented off, take it off completely but I would like to show that I tried to do this test which I think it was important to add it.
I would go back to it after to fix it after I get my grade, or when I understand why it wouldn't work.


Build with:
---
*Java Script
*Jasmine as testing framework. 



